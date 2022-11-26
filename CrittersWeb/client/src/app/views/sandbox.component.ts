import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { CEditController } from '../critters/CEditController/CEditController';
import { CEditModel } from '../critters/CEditModel';
import { CrittersWorld, CrittersWorldSerializer, WorldCangesType } from '../critters/CrittersWorld';
import { CrittersView } from '../critters/CrittersView';
import { ComponentContainerDirective } from './component-container.directive';
import { CTimeController } from '../critters/CTimeController';
import { ZeroTimeController } from '../critters/ZeroTimeController';
import { LoginService } from '../services/login.service';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { count } from 'rxjs';

@Component({
    selector: 'app-sandbox',
    templateUrl: 'sandbox.component.html',
    styles: [
    ],
    providers: [CrittersWorld, CEditController, CEditModel, CrittersView, CTimeController, ZeroTimeController]
})
export class SandboxComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router, private world: CrittersWorld,
        private zeroTimeController: ZeroTimeController, private loginService: LoginService) {
    }        

    // --------------------------------------------------------------    

    savePopup: SavePopup = new SavePopup();

    loadPopup: LoadPopup = new LoadPopup();    

    @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;    

    ngOnInit(): void {
        this.world.TestInit();
        this.zeroTimeController.setThisTimeAsZero();
        this.world.notifyAboutChanges([WorldCangesType.loaded]);
        console.log("sandbox ngOnInit()")        
    }

    public async onSaveButton() {
        if ((await this.loginService.getUserInfo()).signedIn)
            this.savePopup.open(this.http, this.world);
        else {
            this.dialogsHost.showLoginDialog(async (result) => {
                if (result == "ok")
                    if ((await this.loginService.getUserInfo()).signedIn)
                        this.savePopup.open(this.http, this.world);
            });
        }        
    }

    public async onLoadButton() {
        if ((await this.loginService.getUserInfo()).signedIn)            
            this.loadPopup.open(this.http, (w) => this.deserializeWorld(w));
        else {
            this.dialogsHost.showLoginDialog(async (result) => {
                if (result == "ok")
                    if ((await this.loginService.getUserInfo()).signedIn)
                        this.loadPopup.open(this.http, (w) => this.deserializeWorld(w));
            });
        }                
    }

    private deserializeWorld(data: number[]) {
        this.world.Clear();        
        for (let i = 0; i < data.length; i = i + 2) {
            console.log("add cell", data[i], data[i + 1]);
            this.world.AddCell(data[i], data[i + 1]);
        }
        this.zeroTimeController.setThisTimeAsZero();
        this.world.resetModificationFlag();
        this.world.notifyAboutChanges([WorldCangesType.loaded]);
    }


    public onNext() {
        console.log("onNext");
        this.world.RunSerie(1);
        this.world.notifyAboutChanges([WorldCangesType.executed]);
    }

    public getExitConfirmText(): string | undefined {
        return "There are unsaved changes. Do you really want to leave Sandbox?";
    }

    public exitConfirmRequired() {
        return this.world.wasModified();
    }    


}

class SavePopup {

    titles: SandboxWorldTitleModel[] = [];
    saveName: string = "";
    selectedSave: SandboxWorldTitleModel | null = null;
    http!: HttpClient;
    world!: CrittersWorld;

    savePopupDisplayStyle: string = "none";

    open(http: HttpClient, world: CrittersWorld) {        
        // some slots can be free, some - busy
        // we show all array whith 10 slots;
        // empty slots marked in list and have name ---------
        // user can select slot and change name in dialog if neccessary;
        // name applyed when user save world.        
        this.http = http;
        this.world = world;
        this.titles = [];
        this.saveName = "";
        this.selectedSave = null;
        http.get<SandboxWorldTitleModel[]>("/sandboxworlds/titles").subscribe(titles => {
            this.titles = this.ToSlotList(titles);
        });
        this.savePopupDisplayStyle = "block";        
    }

    ToSlotList(titles: SandboxWorldTitleModel[]): SandboxWorldTitleModel[] {
        let result: SandboxWorldTitleModel[] = []
        for (let i = 1; i <= 10; i++)
            result.push({ id: -1, slot: i, name: "<empty>" });
        for (let t of titles)
            result[t.slot - 1] = t;
        return result;
    }

    onSlotSelect(slot: any) {
        this.selectedSave = this.titles[slot - 1];
        if (this.selectedSave != null && this.selectedSave != undefined) {
            this.saveName = this.selectedSave.id == -1 ? ("World " + this.selectedSave.slot) : this.selectedSave.name;
        }
    }

    close() {
        this.savePopupDisplayStyle = "none";
    }

    async onPopupOk() {
        console.log("onSavePopupOk");
        this.savePopupDisplayStyle = "none";
        // save current world to slot        
        this.selectedSave!.name = this.saveName;
        //this.selectedSave!.data = this.world.Serialize();
        await this.SaveWorld(this.selectedSave);
        console.log("after save");
    }

    async SaveWorld(worldTitle: SandboxWorldTitleModel | null) {
        let s = new CrittersWorldSerializer();
        let cellsData = s.SerializeCells(this.world);
        let result = await lastValueFrom(this.http.post("/sandboxworlds/savetoslot", { slot: worldTitle?.slot, newName: worldTitle?.name, cellsData: cellsData }));
        console.log(result);
        if (result)
            this.world.resetModificationFlag();
    }

}

class LoadPopup {

    titles: SandboxWorldTitleModel[] = [];    
    selectedLoad: SandboxWorldTitleModel | null = null;
    http!: HttpClient;    
    resultCallback!: (cellsData: number[]) => void;

    loadPopupDisplayStyle: string = "none";

    open(http: HttpClient, resultCallback: (cellsData: number[]) => void) {    
        this.http = http;
        this.resultCallback = resultCallback;
        this.titles = [];   
        this.selectedLoad = null;
        http.get<SandboxWorldTitleModel[]>("/sandboxworlds/titles").subscribe(titles => {
            this.titles = this.ToSlotList(titles);
        });
        this.loadPopupDisplayStyle = "block";
    }

    ToSlotList(titles: SandboxWorldTitleModel[]): SandboxWorldTitleModel[] {
        let result: SandboxWorldTitleModel[] = []
        for (let i = 1; i <= 10; i++)
            result.push({ id: -1, slot: i, name: "<empty>" });
        for (let t of titles)
            result[t.slot - 1] = t;
        return result;
    }

    onSlotSelect(slot: any) {
        this.selectedLoad = this.titles[slot - 1];        
    }

    close() {
        this.loadPopupDisplayStyle = "none";
    }

    async onPopupOk() {
        console.log("onLoadPopupOk");
        this.loadPopupDisplayStyle = "none";
        // load selected world 
        let loaded = await lastValueFrom(this.http.get("/sandboxworlds/loadfromslot?slot=" + this.selectedLoad?.slot));
        console.log("after load", (loaded as any).cellsData);
        this.resultCallback((loaded as any).cellsData);
    }

}


class SandboxWorldTitleModel {
    id: number = -1;
    slot: number = 0;
    name: string = "";    
    }
