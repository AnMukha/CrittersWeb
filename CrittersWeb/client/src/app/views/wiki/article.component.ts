import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CEditController } from '../../../critters/CEditController';
import { CEditModel } from '../../../critters/CEditModel';
import { CrittersWorld } from '../../../critters/CrittersWorld';
import { CView } from '../../../critters/CView';

@Component({
  selector: 'app-article',
    templateUrl: "article.component.html",
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    article: ArticleModel | null = null;
    world!: CrittersWorld;
    editModel!: CEditModel;
    view!: CView;
    editController!: CEditController;

    CellsFieldIsEmpy(): boolean {        
        return (this.article?.cellsData?.length ?? 0)==0;
    }

    async ngOnInit() {
        let canvas = document.getElementById("article_view_canvas") as HTMLCanvasElement;
        this.world = new CrittersWorld();
        this.editModel = new CEditModel();
        this.view = new CView(canvas, this.world, this.editModel);
        this.editController = new CEditController(canvas, this.world, this.editModel, () => this.view.Repaint());
        this.view.Repaint();        
        this.route.params.subscribe(routeParams => {
            console.log("load start");
            this.http.get<ArticleModel>("/article/" + (routeParams as any).id).subscribe(async article => {
                console.log("Loaded");
                this.article = article;
                this.world.Clear();
                let data = article.cellsData;
                for (let i = 0; i < data.length; i = i + 2)
                    this.world.AddCell(data[i], data[i + 1]);
                setInterval(() =>
                    this.view.Repaint(), 0);                
            });
        });
    }

    ContentToHTML(content: string | undefined): string | undefined {
        return content == undefined ? content: content.replace(/(?:\r\n|\r|\n)/g, '<br>');               
    }

}

export class ArticleModel {
    public id!: string; 
    public name!: string;
    public content!: string;
    public cellsData!: number[];
}
