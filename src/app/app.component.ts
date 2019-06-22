import { Component} from '@angular/core';
import { JsonreaderService } from './jsonreader.service';

import { Employee } from './employee';
import { Router } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  enable:boolean=true;
  edit_icon= "./assets/edit-flat.png"
listOfEmployeies:Employee[];
constructor(private jsonReader:JsonreaderService,private router: Router){
 this. loadMasterData();
 
}
loadMasterData(){
this.jsonReader.getemployee().subscribe((res :Employee[])=>{
this.listOfEmployeies=res;
})
}
gotoEmployeeEdit(employee:Employee){
  
  this.router.navigate(['/edit',employee.id]);
  this.enable=false;
    
 
}
}
