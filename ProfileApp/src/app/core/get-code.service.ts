import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetCodeService {

  URL: string = "https://oauth.vk.com/authorize?client_id=7057838&display=page&redirect_uri=http://localhost:4200/&scope=friends&response_type=code&v=5.101";

  constructor(private http: HttpClient) { }

  getCode() {
    return this.http.get(this.URL, {responseType: 'text'});
  }
}
