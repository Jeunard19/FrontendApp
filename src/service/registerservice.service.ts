import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../model/user-dto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http: HttpClient ) { }
  register(name:String,username:String,email:String,password:String): Observable<UserDTO> {
    var dto = new UserDTO();
    dto.name=name
    dto.username=username
    dto.email=email
    dto.password=password
    dto.role='ROLE_USER'
    
   return this.http.post<UserDTO>('http://localhost:9090/signup',dto)
  
  }
}