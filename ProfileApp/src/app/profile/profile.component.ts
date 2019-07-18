import { Component, OnInit } from '@angular/core';
import {GetCodeService} from "../core/get-code.service";
import {UserModel} from "../shared/models/UserModel";
import {filter, map, switchMap} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {UserInformationService} from "../core/user-information.service";
import {BaseUserInformationModel} from "../shared/models/BaseUserInformationModel";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserFriendsInformationModel} from "../shared/models/UserFriendsInformationModel";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  info: BaseUserInformationModel = {
    first_name: '',
    last_name: '',
    online: null,
    photo_max: '',
  };

  friendsInfo: UserFriendsInformationModel[] = [];

  constructor(private getCodeService: GetCodeService, private userInfoService: UserInformationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fillForm()
  }

  fillForm() {

   //  this.route.queryParams.pipe(switchMap(params =>
   //    this.getCodeService.getToken(params.code).pipe(
   //      switchMap((smth: UserModel) => combineLatest([
   //        this.userInfoService.getBaseUserInformation(smth.user_id, smth.access_token).pipe(map((user: {response:BaseUserInformationModel[]}) => user.response[0])),
   //        this.userInfoService.getUserFriendsInformation(smth.user_id, smth.access_token).pipe(map((friends: {response: {items: UserFriendsInformationModel[]}}) => friends.response.items))
   //      ])),
   //
   //    )) )
   //
   // .subscribe(([userInfo,friendsInfo]:[any, any]) => {
   //    this.info = userInfo;
   //    this.friendsInfo = friendsInfo;
   //    console.log(friendsInfo)
   //  })

    this.route.queryParams.subscribe((params: any) => {
      localStorage.setItem('code', params.code)
    });

    this.getCodeService.getToken().subscribe((response:UserModel) => {
      this.userInfoService.getBaseUserInformation(response.user_id, response.access_token)
                          .subscribe((responseInformation: {response: BaseUserInformationModel[]}) => {
                            this.info = responseInformation.response[0];
      });
      this.userInfoService.getUserFriendsInformation(response.user_id, response.access_token)
        .subscribe((information: {response: {items: UserFriendsInformationModel[]}}) => {
          this.friendsInfo = information.response.items;
        });
    });
  }

}
