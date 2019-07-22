import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ErrorModule { }
