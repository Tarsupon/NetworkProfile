import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';

import { IUserFriendsInformationModel } from '../shared/models/i-user-friends-information-model';
import { IBaseUserInformationModel } from '../shared/models/i-base-user-information-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http: HttpClient) { }

  friends: Observable<IUserFriendsInformationModel[]>;

  getBaseUserInformation(userId: number, accessToken: string) {
    return this.http
      .get(`${environment.GET_USER_ID}${userId}${environment.GET_USER_FIELDS_TOKEN}${accessToken}${environment.VERSION}`)
      .pipe(map((data: { response: IBaseUserInformationModel[] }) => data.response[0]));
  }

  getUserFriendsInformation(userId: number, accessToken) {
    if (!this.friends) {
      this.friends = this.http
        .get(`${environment.GET_FRIENDS_ID}${userId}${environment.GET_FRIENDS_ORDER_FIELDS_TOKEN}${accessToken}${environment.VERSION}`)
        .pipe(
          map((data: { response: { items: IUserFriendsInformationModel[] } }) => data.response.items),
          publishReplay(1),
          refCount(),
        );
    }

    return this.friends;
  }

  clearCache() {
    this.friends = null;
  }

}
