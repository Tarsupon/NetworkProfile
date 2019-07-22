import {Component, OnInit} from '@angular/core';
import {GetCodeService} from "../core/get-code.service";
import {UserModel} from "../shared/models/user-model";
import {concatMap, switchMap} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {UserInformationService} from "../core/user-information.service";
import {BaseUserInformationModel} from "../shared/models/base-user-information-model";
import {ActivatedRoute} from '@angular/router';
import {UserFriendsInformationModel} from "../shared/models/user-friends-information-model";
import {PaginatePipeArgs} from "ngx-pagination/dist/paginate.pipe";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  info: BaseUserInformationModel = {
    first_name: '',
    last_name: '',
    online: null,
    photo_max: '',
  };

  friendsInfo: UserFriendsInformationModel[] = [];

  config: PaginatePipeArgs = {
    itemsPerPage: 5,
    currentPage: 1,
  };

  constructor(private getCodeService: GetCodeService,
              private userInfoService: UserInformationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fillForm();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  fillForm() {
    this.route.queryParams.pipe(concatMap(params =>
      this.getCodeService.getToken(params.code).pipe(
        switchMap((responseUser: UserModel) => combineLatest([
          this.userInfoService.getBaseUserInformation(responseUser.user_id, responseUser.access_token),
          this.userInfoService.getUserFriendsInformation(responseUser.user_id, responseUser.access_token)
        ])),
      )))
   .subscribe(([userInfo,friendsInfo]:[any, any]) => {
      this.info = userInfo;
      this.friendsInfo = friendsInfo;
    })
  }
}
