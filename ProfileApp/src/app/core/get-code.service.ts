import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ParamInterceptor} from "./api.interceptor";
  import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetCodeService {

  constructor(private http: HttpClient) { }

  // getToken(code: string) {
  //   return this.http.get(`${environment.GET_ACCESS_TOKEN}${code}`);
  // }

  getToken() {
    return this.http.get(`${environment.GET_ACCESS_TOKEN}${localStorage.getItem('code')}`);
  }
}
