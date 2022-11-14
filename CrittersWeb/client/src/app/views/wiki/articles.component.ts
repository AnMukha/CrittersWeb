import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleModel } from './article.component';

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
            this.http.get<ArticleTitleModel[]>("/articles/" + (routeParams as any).request).subscribe(articles => {
                this.articles = articles;
            });
        });
  }
}

class ArticleTitleModel {
    id!: string;
    name!: string;
    shortContent!: string;
    author!: string;
    editionDate!: Date;
}
