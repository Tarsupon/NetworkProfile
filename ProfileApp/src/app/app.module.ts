import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from "@angular/material";
import {GetCodeService} from "./core/get-code.service";
import {SharedModule} from "./shared/shared.module";
import { AuthorizeFormComponent } from './authorize-form/authorize-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthorizeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [GetCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
