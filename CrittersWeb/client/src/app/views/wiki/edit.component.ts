import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { CrittersWorld, WorldCangesType } from '../../critters/CrittersWorld';
import { CEditModel } from '../../critters/CEditModel';
import { CrittersView } from '../../critters/CrittersView';
import { CTimeController } from '../../critters/CTimeController';
import { CWorldSnapshot } from '../../critters/CWorldSnapshot';
import { ZeroTimeController } from '../../critters/ZeroTimeController';
import { ArticleStatus } from './article.component';
import { SandBoxCrittersEditController } from '../../critters/CEditController/SandBoxCrittersEditController';
import { CrittersEditController } from '../../critters/CEditController/CrittersEditController';
import { CellsDataSerializer } from '../../dto/Serializers/cells-data-serializer';

@Component({
  selector: 'app-edit-article',
    templateUrl: "edit.component.html",    
  styles: [
    ],
    providers: [CrittersWorld, { provide: CrittersEditController, useClass: SandBoxCrittersEditController }, CEditModel, CrittersView, CTimeController, ZeroTimeController]
})
export class EditArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private location: Location,
        private world: CrittersWorld, private zeroTimeController: ZeroTimeController) { }    

    article: ArticleModel = new ArticleModel();
    isNew: boolean = false;
    nameLength: number | undefined = 0;
    contentLength: number | undefined = 0;    

    ngOnInit(): void {
        this.route.params.subscribe(routeParams => {
            console.log(routeParams);
            if ((routeParams as any).id != 'new')
                this.http.get<ArticleModel>("/article/" + (routeParams as any).id).subscribe(article => {
                    this.article = article;
                    this.world.clear();
                    new CellsDataSerializer().deserializeCells(article.cellsData, this.world);
                    this.zeroTimeController.setThisTimeAsZero();
                    setTimeout(() =>
                        this.world.notifyAboutChanges([WorldCangesType.Loaded]));
                });
            else {                    
                this.isNew = true;
                this.article.name = ""; ;
                this.article.content = "";
                this.world.clear();
                this.world.notifyAboutChanges([WorldCangesType.Loaded]);
            }
        });
    }

    public async onSave(name: string, text: string) {
        await this.save(name, text, ArticleStatus.Draft);
    }

    public async onPublish(name: string, text: string) {
        await this.save(name, text, ArticleStatus.AwaitingApproval);
    }

    public async save(name: string, text: string, status: ArticleStatus) {
        this.article.content = text;
        this.article.name = name;
        this.article.status = status;
        let cellsData = new CellsDataSerializer().serializeCells(this.world.getCells());
        this.article.cellsData = cellsData;
        if (this.isNew) {
            let article: any = await lastValueFrom(await this.http.post("/article", this.article));
            if (article) {
                this.world.resetModificationFlag();
                this.router.navigateByUrl("/wiki/article/" + article.id);
            }
        }
        else {
            await lastValueFrom(await this.http.put<ArticleModel>("/article", this.article));
            this.world.resetModificationFlag();
            this.router.navigateByUrl("/wiki/article/" + this.article.id);            
        }        
    }


    public onDelete() {
        console.log("/article/" + this.article.id);
        this.http.delete("/article/" + this.article.id).subscribe(() => { });
    }
    public onReject() {
        console.log("/article/reject/" + this.article.id);
        this.http.put("/article/reject/" + this.article.id, null).subscribe(() => { });
    }
    public onApprove() {
        console.log("/article/approve/" + this.article.id);
        this.http.put("/article/approve/" + this.article.id, null).subscribe(() => { });
    }

    public exitConfirmRequired(): boolean {
        return this.world.wasModified();
    }

    public getExitConfirmText(): string | undefined {
        return "There are unsaved changes. Do you really want to leave this article page?";
    }

}

export class ArticleModel {
    id!: number;
    name!: string;
    content!: string;
    authorName!: string;
    authorId!: string;
    cellsData!: number[];
    creationDate!: string;
    lastEditionDate!: string;
    approvalDate!: string;
    status!: ArticleStatus;
}
