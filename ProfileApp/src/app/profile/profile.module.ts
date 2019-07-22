import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ProfileRoutingModule } from './profile-routing.module.ts';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,

    // TODO: Вынести в SharedModule
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ]
})
export class ProfileModule { }
