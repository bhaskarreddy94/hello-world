import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
private url:string="http://localhost:8080/api/customers";
 private posturl:string="http://localhost:8080/api/customers/create";
 private deleteurl:string="http://localhost:8080/api/customers/";
 private updateurl:string="http://localhost:8080/api/customers/"
constructor(private _httpclient:HttpClient) { }

  getuser(){
return this._httpclient.get(this.url);
  }
  postuser(user:any){
    return this._httpclient.post(this.posturl,user,httpOptions);


  }
  deleteuserById(id){
    return this._httpclient.delete(this.deleteurl+id);
  }
  updateuser(user){
    return this._httpclient.put(this.updateurl+user.id,user);
  }
}
