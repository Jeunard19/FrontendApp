import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserDTO } from '../model/user-dto';
import { User2 } from '../model/user2';
import { ProductId } from '../model/product-id';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  getResource(resourceUrl) : Observable<Product>{
    
    return this.http.get<Product>(resourceUrl);
  }

  postproduct(name:String, price:number, winstmargin: number) : Observable<Product>{
    var product= new Product
    product.productName=name
    product.pricePaid = price 
    product.winstMargin = winstmargin 
    return this.http.post<Product>("http://localhost:9090/api/product/",product);
  }
  updateUser(productmid:number,name:String,password:String,id:number,username:String) : Observable<UserDTO>{
    var dto = new UserDTO();
    dto.id=id
    dto.name=name
    dto.username=username
    dto.password=password
    dto.role='ROLE_USER'
    var product=new ProductId();
    product.id=productmid
    product.userid=id
    var productlist=[product]
 

    if ( localStorage.getItem('user'|| "[]")==null) {
      localStorage.setItem('user',JSON.stringify(productlist));  
      dto.product=JSON.parse(localStorage.getItem('user'|| "[]"))
      alert(dto.product[0].id)
      return this.http.post<UserDTO>("http://localhost:9090/update",dto);
      
    } else{
      //localStorage.setItem('user',JSON.stringify(dto.product)); 
      productlist= JSON.parse(localStorage.getItem('user'|| "[]"))
      productlist.push(product)
      localStorage.setItem('user',JSON.stringify(productlist))
      dto.product=JSON.parse(localStorage.getItem('user'|| "[]"))
      var liste = []
   
      for(var item=0;item < dto.product.length;item++){
        if(dto.product[item].userid===id){
          liste.push(dto.product[item])

        } 

      }
      if(liste.length===0){
        liste=productlist
      } else{
        
      }
      localStorage.setItem('user2',JSON.stringify(liste))

      //dto.product=JSON.parse(localStorage.getItem('user'|| "[]"))
      dto.product=JSON.parse(localStorage.getItem('user2'|| "[]"))
      //alert(dto.product[1].id)
     
      return this.http.post<UserDTO>("http://localhost:9090/update",dto);
    }
    
    
  }

}
    
