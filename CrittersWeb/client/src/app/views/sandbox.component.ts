import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { CEditController } from '../../critters/CEditController';
import { CEditModel } from '../../critters/CEditModel';
import { CrittersWorld, CrittersWorldSerializer } from '../../critters/CrittersWorld';
import { CView } from '../../critters/CView';
import { ComponentContainerDirective } from './component-container.directive';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@Component({
    selector: 'app-sandbox',
    templateUrl: 'sandbox.component.html',
    styles: [
    ]
})
export class SandboxComponent implements OnInit {    

    constructor(private http: HttpClient, private router: Router) {
    }    

    world!: CrittersWorld;
    view!: CView;
    editController!: CEditController;
    editModel!: CEditModel;

    // --------------------------------------------------------------

    savePopup: SavePopup = new SavePopup();

    loadPopup: LoadPopup = new LoadPopup();

    @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;    

    onSaveButton() {
        this.savePopup.open(this.http, this.world);
    }

    onLoadButton() {
        this.loadPopup.open(this.http, (w) => this.deserializeWorld(w));
    }

    deserializeWorld(data: number[]) {
        this.world.Clear();        
        for (let i = 0; i < data.length; i = i + 2) {
            console.log("add cell", data[i], data[i + 1]);
            this.world.AddCell(data[i], data[i + 1]);
        }
        this.view.Repaint();
    }

    ngOnInit(): void {        
        let canvas = document.getElementById("c_canvas") as HTMLCanvasElement;
        this.world = new CrittersWorld();
        this.world.TestInit();
        this.editModel = new CEditModel();
        this.view = new CView(canvas, this.world, this.editModel);        
        this.editController = new CEditController(canvas, this.world, this.editModel, () => this.view.Repaint());        
        this.view.Repaint();        
    }

    onNext() {
        console.log("onNext");
        this.world.RunSerie(1);
        this.view.Repaint();
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
        await this.SaveWorld(this.selectedSave).then(() => console.log("saved"));
        console.log("after save");
    }

    SaveWorld(worldTitle: SandboxWorldTitleModel | null) {
        let s = new CrittersWorldSerializer();
        let cellsData = s.SerializeCells(this.world);
        return lastValueFrom(this.http.post("/sandboxworlds/savetoslot", { slot: worldTitle?.slot, newName: worldTitle?.name, cellsData: cellsData }));
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
        console.log("onSlotSelect", slot);
        if (this.selectedLoad != null && this.selectedLoad != undefined) {
            // enable buttons
        }
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
