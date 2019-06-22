import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MockjsonService {
private useruri:string="https://jsonplaceholder.typicode.com/users";
private photoUri:string="https://jsonplaceholder.typicode.com/photos";
  constructor(private _httpclient:HttpClient) { }

  getuser(){
 return this._httpclient.get(this.useruri);
  }
  getphotos(){
    return this._httpclient.get(this.photoUri);
  }
}
