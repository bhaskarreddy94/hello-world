import { Component, OnInit } from '@angular/core';
import { MockjsonService } from '../mockjson.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
photos;
  constructor(private _mockjson:MockjsonService) { }

  ngOnInit() {
this._mockjson.getphotos().subscribe((data:any)=>{this.photos=data},(error)=>{console.log})
  }

}
