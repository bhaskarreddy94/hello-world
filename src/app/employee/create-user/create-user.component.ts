import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from "../../app.component";
import {JsonreaderService} from "../../jsonreader.service"


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  myOptions = {
    'placement': 'left',
    'show-delay': 500
}

  constructor(private jsonreader:JsonreaderService) { }

defaultstate:string='indiana';
  ngOnInit() {
this.jsonreader.getstates().subscribe((e:any)=>{
  this.data1=e
})
  

  }

  checkedlist;
  orders: Array<Object> = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];
  state;
  data1;
  //  data1: Array<Object> = [
  //    { id: 0, name: "-- State --" },
  //   { id: 1, name: "Andhra Pradesh" },
  //  { id: 2, name: "Tamil Nadu" },
  //   { id: 3, name: "Karnataka" },
  //  { id: 4, name: "Kerala" }
  // ];
  specality;
  data2: Array<Object> = [
    { id: 0, name: "-- Specality --" },
    { id: 1, name: "XXX" },
    { id: 2, name: "YYY" },
    { id: 3, name: "ZZZ" }
  ];
  ddl3;
  credType: Array<Object> = [
    { id: 0, name: "-- T/F --" },
    { id: 1, name: "True" },
    { id: 2, name: "False" }
  ];
  contracts;
  // data4:Array<Object> = [
  //     {id: 0, name: "-- Yes/No --"},
  //     {id: 1, name: "Yes"},
  //     {id: 2, name: "No"}
  // ];
  data4: string[] = ["Yes", "No"];
  ddl5;
  enable: boolean = false;
  cangeEvent(event) {

    if (event.target.value == "Yes") {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }
  data5: Array<Object> = [
    { id: 0, name: "-- T/F --" },
    { id: 1, name: "True" },
    { id: 2, name: "False" }
  ];
  ddl6;
  data6: Array<Object> = [
    { id: 0, name: "-- T/F --" },
    { id: 1, name: "True" },
    { id: 2, name: "False" }
  ];
  ddl7;
  data7: Array<Object> = [
    { id: 0, name: "-- T/F --" },
    { id: 1, name: "True" },
    { id: 2, name: "False" }
  ];
  ddl8;
  data8: Array<Object> = [
    { id: 0, name: "-- T/F --" },
    { id: 1, name: "True" },
    { id: 2, name: "False" }
  ];

  checklist;
  datachecked: Array<Object> = [
    { id: 1, name: 'order 1' },
    { id: 2, name: 'order 2' },
    { id: 3, name: 'order 3' },
    { id: 4, name: 'order 4' }
  ];
  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
    console.log(empForm.value.ddl1)
    
  }

}
