import { Injectable } from "@angular/core";
import { CEditModel } from "../CEditModel";
import { CPoint, CrittersWorld, WorldCangesType } from "../CrittersWorld";
import { CEditControllerBase } from "./CEditControllerBase";
import { EditCellRule } from "./EditCellRule";
import { ScrollRule } from "./ScrollRule";
import { TouchScrollRule } from "./TouchScrollRule";
import { WheelRule } from "./WheelRule";

@Injectable()
export class CEditController extends CEditControllerBase {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {  
        super();
        this.scrollRule = new ScrollRule(editModel);
        this.editCellRule = new EditCellRule(cWorld, editModel);
        this.wheelRule = new WheelRule(editModel);
        this.touchScrollRule = new TouchScrollRule(cWorld, editModel);
    }

    scrollRule: ScrollRule;
    editCellRule: EditCellRule;
    wheelRule: WheelRule;
    touchScrollRule: TouchScrollRule;

    public override mouseDownHandler(event: any) {
        let changings: WorldCangesType[] = [];
        changings.push(...this.editCellRule.onMouseDown(event));            
        changings.push(...this.scrollRule.onMouseDown(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseUpHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.editCellRule.onMouseUp(event));       
        changings.push(...this.scrollRule.onMouseUp(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.scrollRule.onMouseMove(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }


    public override touchStartHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchStart(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override touchEndHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchEnd(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override touchMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchMove(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseWheelHandler(event: any) {        
        let changings: WorldCangesType[] = [];        
        changings.push(...this.wheelRule.onWheel(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    
}

