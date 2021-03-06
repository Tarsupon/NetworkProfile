import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCodeService {

  constructor(private http: HttpClient) { }

  getToken(code: string) {
    return this.http.get(`${environment.GET_ACCESS_TOKEN}${environment.GET_ACCESS_TOKEN_CLIENT_SECRET}${code}`);
  }

}
