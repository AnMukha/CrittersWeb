import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentContainerDirective } from './component-container.directive';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@Component({
  selector: 'app-startpage',
    templateUrl: "startpage.component.html",
  styles: [
  ]
})
export class StartpageComponent implements OnInit {

  constructor() { }

  @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;

  ngOnInit(): void {
  }

    Login() {
        let login = this.dialogsHost.viewContainerRef.createComponent(LoginComponent);
        login.instance.result.subscribe(evt => {
            this.dialogsHost.viewContainerRef.clear();
            if (evt == 'register') {
                let register = this.dialogsHost.viewContainerRef.createComponent(RegistrationComponent);
                register.instance.result.subscribe(evt => {
                    this.dialogsHost.viewContainerRef.clear();
                });
            }
        }
        );
        return;
    }

}
