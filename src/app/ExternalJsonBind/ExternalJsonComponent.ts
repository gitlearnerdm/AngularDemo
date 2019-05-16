import{ Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:'json-binding',
    templateUrl:'./ExternalJsonComponent.html'
})

export class  ExternalJsonComponent{
    public title:string= "JSON";
     constructor (private httpService: HttpClient) { }
  arrDetail: string [];

  ngOnInit () {
    this.httpService.get('./assets/details.json').subscribe(
      data => {
        this.arrDetail = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrDetail[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
    
}
