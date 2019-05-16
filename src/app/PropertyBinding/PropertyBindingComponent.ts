import{ Component} from '@angular/core';

@Component({
    selector:'property-binding',
    templateUrl:'./PropertyBindingComponent.html'
})
    
export class  PropertyBindingComponent{
    public title:string= "Property Binding";

    public testId="PBind";
    public isDisabled=false;
    public notDisabled=true;
}
