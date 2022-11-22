import { Directive, ViewContainerRef } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@Directive({
  selector: '[component-container]',
})
export class ComponentContainerDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }

    public showLoginDialog(resultCallBack: (result: string) => void) {
        let login = this.viewContainerRef.createComponent(LoginComponent);
        login.instance.result.subscribe(async evt => {
            this.viewContainerRef.clear();
            if (evt == 'register') {
                let register = this.viewContainerRef.createComponent(RegistrationComponent);
                register.instance.result.subscribe(evt => {
                    this.viewContainerRef.clear();
                });
            }
            else
                resultCallBack(evt);
        });        
    }

}
