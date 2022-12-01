import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleModel, ArticleStatus } from './article.component';

@Component({
  selector: 'app-articles',
    templateUrl: "articles.component.html",
  styles: [
  ]
})

export class ArticlesComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

  articles: ArticleTitleModel[] = [];

    ngOnInit(): void {
        this.route.params.subscribe(routeParams => {
            console.log(routeParams);
            let request = (routeParams as any).request as string;
            if (!request.startsWith('q:'))
                this.http.get<ArticleTitleModel[]>("/articles/" + request).subscribe(articles => {
                    this.articles = articles;
                });
            else
                this.http.get<ArticleTitleModel[]>("/articles/search/" + request.substr(2)).subscribe(articles => {
                    this.articles = articles;
                });
        });
    }

    getArticleStatusDesc(st: ArticleStatus) {
        if (st == ArticleStatus.Draft)
            return "(Draft)"
        else if (st == ArticleStatus.Archival)
            return "(In archive)"
        else if (st == ArticleStatus.AwaitingApproval)
            return "(Awaiting moderation)"
        else if (st == ArticleStatus.Regected)
            return "(Adjustment required)"
        else return "";
    }


}

class ArticleTitleModel {
    id!: string;
    name!: string;
    shortContent!: string;
    author!: string;
    editionDate!: Date;
    status!: ArticleStatus;
}
