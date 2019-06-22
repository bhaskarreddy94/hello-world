import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './employee/create-user/create-user.component'
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [{ path: 'employee', component: CreateUserComponent },{path:'edit/:id',component: EmployeeformComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
