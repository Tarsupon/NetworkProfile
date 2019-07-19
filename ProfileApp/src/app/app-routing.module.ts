import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizeFormComponent} from "./authorize-form/authorize-form.component";
import {ProfileComponent} from "./profile/profile.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorizeFormComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
