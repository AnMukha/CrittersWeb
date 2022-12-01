import { Component, OnInit, ViewChild } from '@angular/core';
import { CrittersEditController } from '../critters/CEditController/CrittersEditController';
import { SandBoxCrittersEditController } from '../critters/CEditController/SandBoxCrittersEditController';
import { CEditModel } from '../critters/CEditModel';
import { CrittersView } from '../critters/CrittersView';
import { CrittersWorld, WorldCangesType } from '../critters/CrittersWorld';
import { LoginService, UserInfo } from '../services/login.service';
import { ComponentContainerDirective } from './component-container.directive';

@Component({
  selector: 'app-startpage',
    templateUrl: "startpage.component.html",
  styles: [
    ],
    providers: [CrittersWorld, { provide: CrittersEditController, useClass: SandBoxCrittersEditController }, CEditModel, CrittersView]
})
export class StartpageComponent implements OnInit {

    constructor(private loginService: LoginService, private world: CrittersWorld, private editModel: CEditModel, private cView: CrittersView) { }

    

  @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;

    userInfo: UserInfo = { name: "", signedIn: false, admin: false };

    timer!: NodeJS.Timer;

    async ngOnInit() {
        this.loginService.userInfo.subscribe((ui) => this.userInfo = ui);
        console.log(this.userInfo);
        for (let i = 0; i < 3000; i++) {
            let x = Math.round(Math.random() * 150)+75; 
            let y = Math.round(Math.random() * 35)+12;
            if (this.world.getCell(x, y) === undefined)
                this.world.addCell(x, y);
        }
        this.editModel.scale = 3;
        let cfg = this.cView.getPaintConfig();
        cfg.cellFillStyle = "white";
        cfg.paintGrid = false;
        cfg.paintInfo = false;
        this.cView.setPaintConfig(cfg);
        this.world.notifyAboutChanges([WorldCangesType.Loaded]);
        this.timer = setInterval(() => {
            console.log("sdfsdsdf");
            this.world.runSerie(1);
            this.world.notifyAboutChanges([WorldCangesType.Executed]);
        }, 100);
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
        clearInterval(this.timer);
    }

    login() {
        this.dialogsHost.showLoginDialog(() => { });
    }

    async logout() {
        await this.loginService.logout();
        this.userInfo = await this.loginService.getUserInfo();
    }

}
