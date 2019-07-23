import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { AuthorizeFormComponent } from '../authorize-form/authorize-form.component';


import { AuthorizeFormRoutingModule } from './authorize-form-routing.module';

@NgModule({
  declarations: [AuthorizeFormComponent],
  imports: [
    CommonModule,
    AuthorizeFormRoutingModule,
    SharedModule,
  ]
})
export class AuthorizeFormModule { }
