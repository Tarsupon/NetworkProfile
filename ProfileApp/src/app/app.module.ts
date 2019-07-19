import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {GetCodeService} from "./core/get-code.service";
import {SharedModule} from "./shared/shared.module";
import { AuthorizeFormComponent } from './authorize-form/authorize-form.component';
import { ErrorComponent } from './error/error.component';
import {ProfileModule} from "./profile/profile.module";
import {AuthorizeFormModule} from "./authorize-form/authorize-form.module";
import {ErrorModule} from "./error/error.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProfileModule,
    AuthorizeFormModule,
    ErrorModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [GetCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
