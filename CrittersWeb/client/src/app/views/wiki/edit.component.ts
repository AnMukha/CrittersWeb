import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { CrittersWorld, CrittersWorldSerializer } from '../../../critters/CrittersWorld';
import { CEditModel } from '../../../critters/CEditModel';
import { CView } from '../../../critters/CView';
import { CEditController } from '../../../critters/CEditController';

@Component({
  selector: 'app-edit-article',
    templateUrl: "edit.component.html",    
  styles: [
  ]
})
export class EditArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private location: Location) { }    

    article: ArticleModel = new ArticleModel();
    isNew: boolean = false;
    world!: CrittersWorld;
    editModel!: CEditModel;
    view!: CView;
    editController!: CEditController;

    ngOnInit(): void {
        this.route.params.subscribe(routeParams => {
            let canvas = document.getElementById("edit_article_canvas") as HTMLCanvasElement;
            this.world = new CrittersWorld();
            this.editModel = new CEditModel();
            this.view = new CView(canvas, this.world, this.editModel);
            this.editController = new CEditController(canvas, this.world, this.editModel, () => this.view.Repaint());
            this.view.Repaint();        
            console.log(routeParams);
            if ((routeParams as any).id != 'new')
                this.http.get<ArticleModel>("/article/" + (routeParams as any).id).subscribe(article => {
                    this.article = article;
                    this.world.Clear();
                    let data = article.cellsData;
                    for (let i = 0; i < data.length; i = i + 2)
                        this.world.AddCell(data[i], data[i + 1]);
                    this.view.Repaint();
                });
            else {                    
                this.isNew = true;
                this.world.Clear();
                this.view.Repaint();
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
            if (newArticle)
                this.router.navigateByUrl("/wiki/article/" + newArticle.id);
        }
        else {
            await lastValueFrom(await this.http.put<ArticleModel>("/article/update", this.article));
            this.router.navigateByUrl("/wiki/article/" + this.article.id);
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
