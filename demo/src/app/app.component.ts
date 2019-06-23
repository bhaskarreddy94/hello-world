import { Component ,OnInit} from '@angular/core';
import { MockjsonService } from './mockjson.service';
import { UserService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'demo';
  users;
  deleteicon:string='../assets/delete.jpg'
  editimage:string='../assets/edit-flat.png'
  user = new FormGroup({
    id: new FormControl(''),
    name : new FormControl(''),
    age : new FormControl(''),
    active : new FormControl(true),
  });
  constructor(private _mockjsonservice:MockjsonService,private userservice:UserService){
//this._mockjsonservice.getuser().subscribe((data:any)=>{this.users=data},(error)=>{console.log(error)});
//this._mockjsonservice.getapiUsers().subscribe((data:any)=>{this.users=data},(error)=>{console.log(error)});
this.userservice.getuser().subscribe((data:any)=>{this.users=data},(error)=>{console.log(error)});
}
cust:Customer=new Customer();
ngOnInit(){
  
}
onSubmit(){
  this.cust.name=this.user.value.name;
  this.cust.age=this.user.value.age;
  this.cust.active=this.user.value.active;
  this.cust.id=this.user.value.id;

  console.log(this.cust)
 this.userservice.postuser(this.cust).subscribe((data)=>{console.log(data);
this.ngOnInit();},(error)=>{console.log(error)})
 this.userservice.getuser().subscribe((data:any)=>{this.users=data},(error)=>{console.log(error)});
}

edit(name){
console.log(name)
this.userservice.updateuser(name).subscribe((data)=>{console.log(data)},(error)=>{console.log(error)})
}
delete(user){
  console.log(user.id);
  this.userservice.deleteuserById(user.id).subscribe((data)=>{console.log(data)
    this.ngOnInit();},(error)=>{console.log(error)})
}
}
