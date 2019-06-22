import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './employee/create-user/create-user.component';
import {FormsModule,} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { TooltipModule } from 'ng2-tooltip-directive';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule ,
    ReactiveFormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
