import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthorizeFormComponent } from './authorize-form.component';

export const routes: Routes = [
  { path: '', component: AuthorizeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizeFormRoutingModule { }
