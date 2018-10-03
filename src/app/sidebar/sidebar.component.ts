import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RegisterserviceService } from '../../service/registerservice.service';
import { UserDTO } from '../../model/user-dto';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service:AuthService) { }

  public user = new UserDTO();
  private userUrl = 'http://localhost:9090/user/'; 
  username:String

 public arrayFromStroage = JSON.parse(localStorage.getItem("user2"));
 public arrayLength = this.arrayFromStroage.length;
  

  ngOnInit() {
  }

  logout() {
    this.service.logout();
}

  showInfo() {
   
      this.service.getResource(this.userUrl)
       .subscribe(
                   data => {
                    this.user=data,           
                    
                    this.username=this.user.principal.username                              
                  }
                   
                  );

                  alert("Username: " + this.user.principal.username)
                  alert(this.arrayFromStroage)
                
  }
  
}


