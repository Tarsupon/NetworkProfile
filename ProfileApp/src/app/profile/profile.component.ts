import { Component, OnInit } from '@angular/core';
import {GetCodeService} from "../core/get-code.service";
import {UserModel} from "../shared/models/UserModel";
import {filter} from "rxjs/operators";
import {UserInformationService} from "../core/user-information.service";
import {BaseUserInformationModel} from "../shared/models/BaseUserInformationModel";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imagePath: string;
  userName: string = '';
  userSurname: string = '';
  userOnlineStatus: number = null;

  constructor(private getCodeService: GetCodeService, private userInfoService: UserInformationService) { }

  ngOnInit() {
  }

  getCodeMouseEvent() {
    this.getCodeService.getCode().subscribe(response =>{
    });
    this.getCodeService.getToken().subscribe((response:UserModel) => {
      this.userInfoService.getBaseUserInformation(response.user_id, response.access_token)
                          .subscribe((responseInformation: {response: BaseUserInformationModel[]}) => {
                            this.userName = responseInformation.response[0].first_name;
                            this.userSurname = responseInformation.response[0].last_name;
                            this.imagePath = responseInformation.response[0].photo_max;
                            this.userOnlineStatus = responseInformation.response[0].online;
                            localStorage.clear();
      })
    });
  }

}
