
 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable} from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class JsonreaderService {

  countryjsonurl='./assets/country.json';
  employeejsonurl='./assets/employee.json';
  statejsonurl='./assets/state.json';
  constructor( private httpclient :HttpClient) { }
employe:Employee;
  getcountries(){
    return this.httpclient.get(this.countryjsonurl);
     
  }
  getstates(){
   return this.httpclient.get(this.statejsonurl);
  }
  getemployee(){
    return this.httpclient.get(this.employeejsonurl);
  }

  getEmployeeById(id:string) :Employee
  {
    console.log("jsonreader.getemployeebyId()",id);
     this.getemployee().subscribe((rep:Employee[])=>{
     rep.forEach(
       e=>{
         if(e.id === id){
          // this.employe=e;
          return e;
         }
       }
     )
    })
    return this.employe;
     
  }
  
}
