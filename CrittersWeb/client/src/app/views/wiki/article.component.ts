import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CEditController } from '../../critters/CEditController';
import { CEditModel } from '../../critters/CEditModel';
import { CrittersWorld, WorldCangesType } from '../../critters/CrittersWorld';
import { CrittersView } from '../../critters/CrittersView';
import { CEditControllerBase } from '../../critters/CEditControllerBase';
import { CTimeController } from '../../critters/CTimeController';
import { ZeroTimeController } from '../../critters/ZeroTimeController';

@Component({
  selector: 'app-article',
    templateUrl: "article.component.html",
  styles: [
    ],
    providers: [CrittersWorld, { provide: CEditController, useClass: CEditControllerBase }, CEditModel, CrittersView,
        CTimeController, ZeroTimeController]
})
export class ArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute, private world: CrittersWorld, private zeroTimeController: ZeroTimeController) { }

    article: ArticleModel | null = null;    

    CellsFieldIsEmpy(): boolean {        
        return (this.article?.cellsData?.length ?? 0)==0;
    }

    async ngOnInit() {
        this.route.params.subscribe(routeParams => {
            console.log("load start");
            this.http.get<ArticleModel>("/article/" + (routeParams as any).id).subscribe(async article => {
                console.log("Loaded");
                this.article = article;
                this.world.Clear();
                let data = article.cellsData;
                for (let i = 0; i < data.length; i = i + 2)
                    this.world.AddCell(data[i], data[i + 1]);
                this.zeroTimeController.setThisTimeAsZero();                
                setInterval(() =>
                    this.world.notifyAboutChanges([WorldCangesType.loaded]));
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
