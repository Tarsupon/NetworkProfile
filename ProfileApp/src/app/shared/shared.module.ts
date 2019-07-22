import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { OnlineStatusPipe } from './pipes/online-status.pipe';

@NgModule({
  declarations: [OnlineStatusPipe],
  exports: [
    OnlineStatusPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
