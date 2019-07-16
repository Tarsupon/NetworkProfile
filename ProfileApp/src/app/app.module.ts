import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {GetCodeService} from "./core/get-code.service";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [GetCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
