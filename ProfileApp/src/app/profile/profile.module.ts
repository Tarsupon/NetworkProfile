import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatSelectModule} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {NgxPaginationModule} from "ngx-pagination";
import {ProfileRoutingModule} from "./profile-routing.module.ts";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSelectModule,
    MatCardModule,
    SharedModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ]
})
export class ProfileModule { }
