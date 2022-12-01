import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService, UserInfo } from '../../services/login.service';
import { ComponentContainerDirective } from '../component-container.directive';

@Component({
  selector: 'app-wiki',
  templateUrl: "wiki.component.html",
  styles: [
  ]
})
export class WikiComponent implements OnInit {

    constructor(private router: Router, private loginService: LoginService) { }

  @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;

    ngOnInit(): void {
        this.loginService.userInfo.subscribe((ui) => this.userInfo = ui);
    }

    userInfo: UserInfo | null = null;

    keyPress($event: any, request: string) {
        if ($event.code == "Enter")
            this.onSearch(request);
    }

    onSearch(request: string) {
        this.router.navigateByUrl("/wiki/articles/q:" + request);
    }

    async onCreateArticle() {
        if ((await this.loginService.getUserInfo()).signedIn)
            this.navigateToArticleCreation();
        else {
            this.dialogsHost.showLoginDialog(async (result) => {
                if (result == "ok")
                    if ((await this.loginService.getUserInfo()).signedIn)
                        this.navigateToArticleCreation();
            });
        }
    }

    navigateToArticleCreation() {
        this.router.navigateByUrl("/wiki/edit/new");
    }


}
