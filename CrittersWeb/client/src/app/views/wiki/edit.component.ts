import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { CrittersWorld, CrittersWorldSerializer, WorldCangesType } from '../../critters/CrittersWorld';
import { CEditModel } from '../../critters/CEditModel';
import { CrittersView } from '../../critters/CrittersView';
import { CEditController } from '../../critters/CEditController';
import { CTimeController } from '../../critters/CTimeController';
import { CWorldSnapshot } from '../../critters/CWorldSnapshot';
import { ZeroTimeController } from '../../critters/ZeroTimeController';

@Component({
  selector: 'app-edit-article',
    templateUrl: "edit.component.html",    
  styles: [
    ],
    providers: [CrittersWorld, CEditController, CEditModel, CrittersView, CTimeController, ZeroTimeController]
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
                    this.world.Clear();
                    let data = article.cellsData;
                    for (let i = 0; i < data.length ; i = i + 2)
                        this.world.AddCell(data[i], data[i + 1]);
                    this.zeroTimeController.setThisTimeAsZero();                    
                    setTimeout(() =>
                        this.world.notifyAboutChanges([WorldCangesType.loaded]));
                });
            else {                    
                this.isNew = true;
                this.world.Clear();
                this.world.notifyAboutChanges([WorldCangesType.loaded]);
            }
        });
    }

    public async OnSave(name: string, text: string) {
        console.log(name, text);        
        this.article.content = text;
        this.article.name = name;
        this.article.status = 0;        
        let s = new CrittersWorldSerializer();
        let cellsData = s.SerializeCells(this.world);
        this.article.cellsData = cellsData;
        if (this.isNew) {
            let newArticle = await lastValueFrom(await this.http.post<ArticleModel>("/article/new", this.article));
            if (newArticle) {
                this.world.resetModificationFlag();
                this.router.navigateByUrl("/wiki/article/" + newArticle.id);
            }
        }
        else {
            var saved = await lastValueFrom(await this.http.put<ArticleModel>("/article/update", this.article));
            if (saved) {
                this.world.resetModificationFlag();
                this.router.navigateByUrl("/wiki/article/" + this.article.id);
            }
        }        
    }

    public OnDelete() {
        console.log("/article/delete/" + this.article.id);
        this.http.delete("/article/delete/" + this.article.id).subscribe(() => { });
    }
    public OnReject() {
        console.log("/article/reject/" + this.article.id);
        this.http.put("/article/reject/" + this.article.id, null).subscribe(() => { });
    }
    public OnApprove() {
        console.log("/article/approve/" + this.article.id);
        this.http.put("/article/approve/" + this.article.id, null).subscribe(() => { });
    }

    public exitConfirmRequired(): boolean {
        return this.world.wasModified();
    }

    public getExitConfirmText(): string | undefined {
        return "There are unsaved changes. Do you really want to leave this article page?";
    }

    public OnPublish() {

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
    status!: Number;
}
