import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {ParamInterceptor} from "./api.interceptor";
import {GetCodeService} from "./get-code.service";
import {UserInformationService} from "./user-information.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    GetCodeService,
    UserInformationService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
