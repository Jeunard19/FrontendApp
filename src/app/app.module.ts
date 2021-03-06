import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../service/auth.service';
import { RegisterComponent } from './register/register.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    ProductComponent,
    SidebarComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,HttpClientModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  { path: 'userinfo', component: ProfilepageComponent }]),
    AppRoutingModule
  ],
  providers: [AuthService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
