import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http: HttpClient) { }

  getBaseUserInformation(userId: number, accessToken: string) {

    let BASE_INFORMATION_URL: string = `https://api.vk.com/method/users.get?user_ids=${userId}&fields=online,photo_max&access_token=${accessToken}&v=5.101`;

    return this.http.get(BASE_INFORMATION_URL);
  }

  getUserFriendsInformation(userId: number, accessToken) {

    let FRIENDS_INFORMATION_URL: string = `https://api.vk.com/method/friends.get?user_ids=${userId}&order=hints&count=5&fields=nickname,photo_50&access_token=${accessToken}&v=5.101`;

    return this.http.get(FRIENDS_INFORMATION_URL);
  }
}
