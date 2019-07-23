import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IBaseUserInformationModel, IUserFriendsInformationModel, IUserModel } from '@app/shared/models';
import { GetCodeService } from '../core';
import { combineLatest } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import { PaginatePipeArgs } from 'ngx-pagination/dist/paginate.pipe';


import { UserInformationService } from '@app/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(
    private getCodeService: GetCodeService,
    private userInfoService: UserInformationService,
    private route: ActivatedRoute,
  ) { }

  info: IBaseUserInformationModel = {
    first_name: '',
    last_name: '',
    online: null,
    photo_max: '',
  };

  friendsInfo: IUserFriendsInformationModel[] = [];
  p = 1;

  ngOnInit() {
    this.fillForm();
  }

  fillForm() {
    this.route.queryParams.pipe(concatMap(params =>
      this.getCodeService.getToken(params.code).pipe(
        switchMap((responseUser: IUserModel) => combineLatest([
          this.userInfoService.getBaseUserInformation(responseUser.user_id, responseUser.access_token),
          this.userInfoService.getUserFriendsInformation(responseUser.user_id, responseUser.access_token)
        ])),
      )))
      .subscribe(([userInfo, friendsInfo]: [any, any]) => {
        this.info = userInfo;
        this.friendsInfo = friendsInfo;
      });
  }
}
