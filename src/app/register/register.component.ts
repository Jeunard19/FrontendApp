import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterserviceService } from '../../service/registerservice.service';
import { UserDTO } from '../../model/user-dto';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String
username:String
pass:String
email:String
logForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private service:RegisterserviceService,private router: Router) {
    this.logForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],

    });
  }
  model: any = {};
public static userid:number
  dato: UserDTO
  ngOnInit() {
   
  }

onSubmit() {
  this.service.register(this.model.name, this.model.username,this.model.email,this.model.password) .subscribe(data=>{
    RegisterComponent.userid =data.id
    alert("Sign-up succesfull")})
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
 
  //AppComponent.API_ENDPOINT=true
 
  this.router.navigateByUrl('/login');
}

}
