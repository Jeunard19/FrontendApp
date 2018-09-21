import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
    constructor(
        private _service:AuthService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}