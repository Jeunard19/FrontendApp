import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../model/user-dto';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public foo = new UserDTO(1,'sample foo');
  private foosUrl = 'http://localhost:9090/users/';  

  constructor(private _service:AuthService) {}

  ngOnInit() {
  }
  getFoo(){
      this._service.getResource(this.foosUrl+this.foo.id)
       .subscribe(
                   data => this.foo = data,
                   error =>  this.foo.name = 'Error');
  }

}
