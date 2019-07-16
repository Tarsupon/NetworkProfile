import { Component, OnInit } from '@angular/core';
import {GetCodeService} from "../core/get-code.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imagePath: any;
  isImageExists: boolean = false;

  constructor(private getCodeService: GetCodeService) { }

  ngOnInit() {
  }

  getCodeMouseEvent() {
    this.getCodeService.getCode().subscribe(response => {
    });
  }
}
