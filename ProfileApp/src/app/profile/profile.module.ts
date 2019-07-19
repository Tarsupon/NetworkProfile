import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    SharedModule,
    RouterModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ProfileModule { }
