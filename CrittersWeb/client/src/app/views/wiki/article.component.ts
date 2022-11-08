import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
    templateUrl: "article.component.html",
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    article: ArticleModel | null = null;

    async ngOnInit() {
        //console.log(this.route.snapshot.paramMap.get("name"));  
        this.route.params.subscribe(routeParams => {
            console.log(routeParams);
            this.http.get<ArticleModel>("/article/" + (routeParams as any).name).subscribe(article => {
                this.article = article;
            });
        });
        //this.http.get<ArticleModel>("/article/" + this.route.snapshot.paramMap.get("name")).subscribe(article => {
          //  this.article = article;
    }

}

export class ArticleModel {
    public name!: string;
    public content!: string;
    public cellsData!: number[];
}
