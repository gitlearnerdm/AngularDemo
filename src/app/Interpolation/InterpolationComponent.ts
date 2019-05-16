import{Component}from '@angular/core';

@Component({
    selector: 'interpolation',
    templateUrl: './InterpolationComponent.html'
})

export class InterpolationComponent{
    public title:string = "Interpolation Page";
    public interpolationContent:string=" Dynamic Content";
    public demoFun:string = "Interpolation Demo function";
    public siteUrl= window.location.href;
    


    InterpolationFunction(){
        return "I am called through " + this.demoFun;
    }

}