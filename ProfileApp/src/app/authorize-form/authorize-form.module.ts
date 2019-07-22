import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AuthorizeFormRoutingModule } from './authorize-form-routing.module';
import { AuthorizeFormComponent } from './authorize-form.component';

@NgModule({
  declarations: [AuthorizeFormComponent],
  imports: [
    CommonModule,
    AuthorizeFormRoutingModule,
    SharedModule,
  ]
})
export class AuthorizeFormModule { }
