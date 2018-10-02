import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../model/user-dto';
import { AuthService } from '../../service/auth.service';
import { RegisterComponent } from '../register/register.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { ProductUser } from '../../model/product-user';

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
  pricePaid:number;
  winstMargin:number; 
  productuser:ProductUser

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
    deDiv.innerHTML = '<tr> <th>PRODUCT</th> <th>CATERGORY</th> <th>PRICE PAID</th>  <th>PRICE ONLINE</th>  <th>WINST</th> </tr>';
    
    for(var i=0;i<200;i++){
    
        this._service2.getResource("http://localhost:9090/users/"+id+"/product/"+i).subscribe(
      data2 => {
        this.product=data2;
      //  this.createtables(this.product);
      var jojo =  '<tr id = AA'+this.product.id+'> <th>'+this.product.productName+'</th> <th>'+this.product.productCategory+'</th> <th>'+this.product.pricePaid+'</th><th>'+this.product.pricesOnline+'</th> <th>'+this.product.margin+'</th> </tr>';
      deDiv.innerHTML = deDiv.innerHTML + jojo;
      alert(this.product.id)
      if (this.product.margin>this.product.winstMargin) {
        document.getElementById("AA"+this.product.id).style.backgroundColor = '#00FF00';
      }

       else if (this.product.margin<1)
      {
        document.getElementById("AA"+this.product.id).style.backgroundColor =  '#DC143C';
      }  
      else if (this.product.margin<this.product.winstMargin)
      {
        document.getElementById("AA"+this.product.id).style.backgroundColor = '#FFFFFF';
      }  
     
     
      })
      
      
     
    }}
    getproduct2(id:number){
      var deDiv = document.getElementById("mercure");
      deDiv.innerHTML = '<tr> <th>PRODUCT</th> <th>CATERGORY</th> <th>PRICE PAID</th>  <th>PRICE ONLINE</th>  <th>WINST</th> </tr>';
      
      
      
          this._service.getResourceprod("http://localhost:9090/users/"+id+"/product/").subscribe(
        data2 => {
          this.productuser=data2;
        //  this.createtables(this.product);
        for(var i=0;i<this.productuser._embedded.product.length;i++){
        var jojo =  '<tr id = AA'+this.productuser._embedded.product[i].id+'> <th>'+this.productuser._embedded.product[i].productName+'</th> <th>'+this.productuser._embedded.product[i].productCategory+'</th> <th>'+this.productuser._embedded.product[i].pricePaid+'</th><th>'+this.productuser._embedded.product[i].pricesOnline+'</th> <th>'+this.productuser._embedded.product[i].margin+'</th> </tr>';
        deDiv.innerHTML = deDiv.innerHTML + jojo;
        alert(this.productuser._embedded.product[i].id)
        if (this.productuser._embedded.product[i].margin>this.productuser._embedded.product[i].winstMargin) {
          document.getElementById("AA"+this.productuser._embedded.product[i].id).style.backgroundColor = '#00FF00';
        }
  
         else if (this.product.margin<1)
        {
          document.getElementById("AA"+this.productuser._embedded.product[i].id).style.backgroundColor =  '#DC143C';
        }  
        else if (this.product.margin<this.productuser._embedded.product[i].winstMargin)
        {
          document.getElementById("AA"+this.productuser._embedded.product[i].id).style.backgroundColor = '#FFFFFF';
        }  
      }
       
        })
        
        
       
      }
  




    onSubmit(){
      this._service2.postproduct(this.Term, this.pricePaid, this.winstMargin).subscribe(data=>{
        this.product2=data,
        this._service2.updateUser(this.product2.id,this.name,this.passwoord,this.userid,this.username).subscribe()
        window.location.reload()
      })
    }
    
  Getcolors(){
    
  }


}
