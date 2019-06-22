import { Component } from '@angular/core';
import { MockjsonService } from './mockjson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  users;
  constructor(private _mockjsonservice:MockjsonService){
this._mockjsonservice.getuser().subscribe((data:any)=>{this.users=data},(error)=>{console.log(error)});
  }

}
