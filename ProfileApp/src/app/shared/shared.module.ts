import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

import { OnlineStatusPipe } from './pipes/online-status.pipe';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    OnlineStatusPipe,
  ],
  exports: [
    OnlineStatusPipe,
    NgxPaginationModule,
    MATERIAL_MODULES,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MATERIAL_MODULES,
  ],
})
export class SharedModule { }
