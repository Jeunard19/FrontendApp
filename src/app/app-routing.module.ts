import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {HomeComponent} from './home/home.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: UserComponent,
      },
      {path: 'userinfo', component: ProfilepageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  ,
  declarations: []
})
export class AppRoutingModule { }
