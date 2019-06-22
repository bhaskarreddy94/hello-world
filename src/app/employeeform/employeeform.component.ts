import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JsonreaderService } from '../jsonreader.service';
import { Employee } from '../employee';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  employe: Employee;

  constructor(private activeRout: ActivatedRoute, private jsonReader: JsonreaderService,private route:Router, private _emplouefrom: FormBuilder) { }
  employeform = this._emplouefrom.group({
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: '',
    edit_icon: ''

  })
  empid;
  myOptions = {
    'placement': 'left',
    'show-delay': 500
}
  employees:Employee[];
  data:string[]=["bhaskar","reddy"]
  ngOnInit() {
    
    console.log("ngOnInit from employee service")
   this.activeRout.paramMap.subscribe((paramMap:ParamMap)=>{
    this.empid = paramMap.get('id');

    console.log(this.empid)
   });
   this.getUserList();
  }

  getUserList() {
    this.jsonReader.getemployee().subscribe((res: Employee[]) => {
      this.employees = res; 
    });
  }

  update(){
    console.log("empid",this.empid);
     const employedetails = this.getDetails(this.empid);
    this.employeform.reset();
     console.log(employedetails)
     this.employeform.setValue(employedetails);
    
  }

  getDetails(id) {
    let value;
      this.employees.forEach(e =>{
          if(e.id === id){
           value = e;
          }
        }
      )
      return value;
  }
  backtoHome(){
this.route.navigate(['/']);
  }

  updateEdit(employee:Employee){
    console.log(employee.id);
    let id=employee.id;
   let e= this.getDetails(employee.id);
 
 if(this.employees.includes(e)){
  var filtered = this.employees.filter(function(value, index, arr){

    return value.id == id;

});
this.employees=filtered;
 }

  }
 
 
}
