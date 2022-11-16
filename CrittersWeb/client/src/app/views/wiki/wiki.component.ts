import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: "wiki.component.html",
  styles: [
  ]
})
export class WikiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    }

    OnSearch(request: string) {
        this.router.navigateByUrl("/wiki/articles/q:" + request);
    }


}
