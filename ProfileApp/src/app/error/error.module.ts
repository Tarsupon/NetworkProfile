import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {routes} from "./error.routing";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class ErrorModule { }
