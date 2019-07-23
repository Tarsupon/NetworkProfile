import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module.ts';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    NgbPaginationModule,
  ],
})
export class ProfileModule { }
