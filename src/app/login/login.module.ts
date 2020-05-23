import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { LoginService } from './login.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[LoginComponent],
  providers:[LoginService]
})
export class LoginModule { }
