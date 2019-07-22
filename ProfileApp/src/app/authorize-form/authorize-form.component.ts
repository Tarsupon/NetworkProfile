import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authorize-form',
  templateUrl: './authorize-form.component.html',
  styleUrls: ['./authorize-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizeFormComponent { }
