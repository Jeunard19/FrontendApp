import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  
  }
public loginData = {username: "", password: ""};

    constructor(private _service:AuthService,private _router: Router) {}
 
    login() {
        
        this._service.obtainAccessToken(this.loginData);
    }

    register() {
        
      this._router.navigate(['/register']);
  }
}


