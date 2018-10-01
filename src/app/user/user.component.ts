import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../model/user-dto';
import { AuthService } from '../../service/auth.service';
import { RegisterComponent } from '../register/register.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { ProductId } from '../../model/product-id';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public foo = new UserDTO();
  private foosUrl = 'http://localhost:9090/user/';  
  userid:number
  username:String
  name:String
  email:String
  passwoord:String
  product:Product
  product2:Product
  Term:String
  userproduct:ProductId[]

  constructor(private _service:AuthService,private _service2:ProductService) {}

  ngOnInit() {
    this._service.checkCredentials();
    this.getFoo()
    this._service.checkCredentials();


  }
  getFoo(){
      this._service.getResource(this.foosUrl)
       .subscribe(
                   data => {
                    this.foo=data,
                
                    this.userid=this.foo.principal.id,
                    this.username=this.foo.principal.username
                    this.passwoord=this.foo.principal.password
                    this.getproduct(this.userid)

                  
                   }
                   //,
                  // error =>  this.example.name = 'Error'
                  );
  }

  createtables(product:Product){                
   
   
   
       
}

  getproduct(id:number){
    var deDiv = document.getElementById("mercure");
    deDiv.innerHTML = '<tr> <th>PRODUCT</th> <th>CATERGORY</th> <th>PRICE</th>  <th>WINST</th> </tr>';
    this.userproduct=JSON.parse(localStorage.getItem('user2'|| "[]"))
    if(localStorage.getItem('user2'|| "[]")===null){
      this._service2.getResource("http://localhost:9090/users/"+id+"/product/1").subscribe(
        data2 => {
          this.product=data2;
        //  this.createtables(this.product);
        var jojo =  '<tr> <th>'+this.product.productName+'</th> <th>'+this.product.productCategory+'</th> <th>'+this.product.pricePaid+'</th><th>'+this.product.winstMargin+'</th> </tr>';
        deDiv.innerHTML = deDiv.innerHTML + jojo;
        
        })

    } else{
      for(var i=0;i<this.userproduct.length;i++){
    
        this._service2.getResource("http://localhost:9090/users/"+id+"/product/"+this.userproduct[i].id).subscribe(
      data2 => {
        this.product=data2;
      //  this.createtables(this.product);
      var jojo =  '<tr> <th>'+this.product.productName+'</th> <th>'+this.product.productCategory+'</th> <th>'+this.product.pricePaid+'</th><th>'+this.product.winstMargin+'</th> </tr>';
      deDiv.innerHTML = deDiv.innerHTML + jojo;
      
      })
      
      
     
    }
    }
   }

    onSubmit(){
      this._service2.postproduct(this.Term).subscribe(data=>{
        this.product2=data,
        this._service2.updateUser(this.product2.id,this.name,this.passwoord,this.userid,this.username).subscribe()
        window.location.reload()
      })
    }
    
  


}
