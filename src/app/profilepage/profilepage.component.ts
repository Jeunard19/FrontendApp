import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserDTO } from '../../model/user-dto';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private service:AuthService) { }

  public user = new UserDTO();
  private userUrl = 'http://localhost:9090/user/'; 
  username:String
  name:String

 public arrayFromStroage = JSON.parse(localStorage.getItem("user2"));
 public arrayLength = this.arrayFromStroage.length;


  ngOnInit() {
    
    this.service.getResource(this.userUrl)
    .subscribe(
                data => {
                 this.user=data,           
                 
                 this.username=this.user.principal.username                              
               }
                
               );


               this.service.getResource(this.userUrl)
               .subscribe(
                           data => {
                            this.user=data,           
                            
                            this.name=this.user.principal.name                              
                          }
                           
                          );

              
  }

   
    
              


}



