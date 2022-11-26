import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CEditController } from '../../critters/CEditController/CEditController';
import { CEditModel } from '../../critters/CEditModel';
import { CrittersWorld, WorldCangesType } from '../../critters/CrittersWorld';
import { CrittersView } from '../../critters/CrittersView';
import { CEditControllerBase } from '../../critters/CEditController/CEditControllerBase';
import { CTimeController } from '../../critters/CTimeController';
import { ZeroTimeController } from '../../critters/ZeroTimeController';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-article',
    templateUrl: "article.component.html",
  styles: [
    ],
    providers: [CrittersWorld, { provide: CEditController, useClass: CEditControllerBase }, CEditModel, CrittersView,
        CTimeController, ZeroTimeController]
})
export class ArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,  private world: CrittersWorld, private zeroTimeController: ZeroTimeController,
        private loginService: LoginService) { }

    article: ArticleModel | null = null; 

    editAvaible: boolean = false;
    deleteAvaible: boolean = false;
    toArchiveAvaible: boolean = false;

    CellsFieldIsEmpy(): boolean {        
        return (this.article?.cellsData?.length ?? 0)==0;
    }

    async ngOnInit() {
        this.route.params.subscribe(routeParams => {
            console.log("load start");
            this.http.get<ArticleModel>("/article/" + (routeParams as any).id).subscribe(async article => {                
                this.article = article;
                this.deserializeWorld(article);
                this.zeroTimeController.setThisTimeAsZero();                     
                await this.showAccessibleButtons();
                setInterval(() =>
                    this.world.notifyAboutChanges([WorldCangesType.loaded]));
            });
        });
    }

    async showAccessibleButtons() {
        
        let userInfo = await this.loginService.getUserInfo();
        if (userInfo != undefined && userInfo.signedIn) {            
            // user can edit article when it in draft/rejected status or if user is admin
            this.editAvaible = 
            this.editAvaible = (this.article?.authorName == userInfo.name &&
                [ArticleStatus.draft, ArticleStatus.regected].includes(this.article.status)) || userInfo.admin;
            // user can delete article if he is admin or it is his article
            this.deleteAvaible = this.article?.authorName == userInfo.name || userInfo.admin;
            // user can send article to archive if it approved his article or user is a moderator
            this.toArchiveAvaible = (this.article?.authorName == userInfo.name &&
                this.article.status == ArticleStatus.approved) || userInfo.admin;
        }
    }

    deserializeWorld(article: ArticleModel) {
        this.world.Clear();
        let data = article.cellsData;
        for (let i = 0; i < data.length; i = i + 2)
            this.world.AddCell(data[i], data[i + 1]);
    }

    deleteArticle() {
        if (window.confirm("A you sure want to delete this article permanently?")) {
            this.http.delete("/article/delete/" + this.article!.id).subscribe(() => {
                this.router.navigateByUrl("/wiki/article/contents");
            });                
        }
    }

    toArchive() {
        if (window.confirm("A you sure want to move this article to the archive?")) {
            this.http.put("article/toarchive/" + this.article!.id, this.article!.id).subscribe(() => {
                this.router.navigateByUrl("/wiki/article/contents");
            });
        }
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
    public authorName!: string;
    public status!: ArticleStatus;
}

export enum ArticleStatus {    
    draft = 1,
    awaitingApproval = 2,
    regected = 3,
    approved = 4,
    archival = 5
}

