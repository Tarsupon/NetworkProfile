import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authorize-form',
  templateUrl: './authorize-form.component.html',
  styleUrls: ['./authorize-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizeFormComponent implements OnInit{
  logoPath: string = 'assets/Images/iceberg-logo.svg';
  vkLogoPath: string = 'assets/Images/vk-social-network-logo.svg';

  ngOnInit() {
  }

  constructor() { }

}
