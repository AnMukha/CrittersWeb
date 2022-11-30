import { Injectable } from "@angular/core";
import { CEditModel } from "../CEditModel";
import { CPoint, CrittersWorld, WorldCangesType } from "../CrittersWorld";
import { CrittersEditController } from "./CrittersEditController";
import { EditCellRule } from "./EditCellRule";
import { ScrollRule } from "./ScrollRule";
import { TouchScrollRule } from "./TouchScrollRule";
import { WheelRule } from "./WheelRule";

@Injectable()
export class ViewOnlyCrittersEditController implements CrittersEditController {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {  
        this.scrollRule = new ScrollRule(editModel);        
        this.wheelRule = new WheelRule(editModel);
        this.touchScrollRule = new TouchScrollRule(cWorld, editModel);
    }

    scrollRule: ScrollRule;    
    wheelRule: WheelRule;
    touchScrollRule: TouchScrollRule;

    public mouseDownHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.scrollRule.onMouseDown(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public mouseUpHandler(event: any) {
        let changings: WorldCangesType[] = [];                
        changings.push(...this.scrollRule.onMouseUp(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public mouseMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.scrollRule.onMouseMove(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }


    public touchStartHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchStart(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public touchEndHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchEnd(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public touchMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchMove(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public mouseWheelHandler(event: any) {        
        let changings: WorldCangesType[] = [];        
        changings.push(...this.wheelRule.onWheel(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    
}

