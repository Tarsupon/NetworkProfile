import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { AuthorizeFormRoutingModule } from './authorize-form-routing.module';
import { AuthorizeFormComponent } from './authorize-form.component';

@NgModule({
  declarations: [AuthorizeFormComponent],
  imports: [
    CommonModule,
    AuthorizeFormRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AuthorizeFormModule { }
