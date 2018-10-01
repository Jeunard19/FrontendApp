export class UserDTO {
   id:number
    name:String
    username: String
      password: String
       email: String
       role:String
       principal:{id:number,username:String,password:String,name:String}
       product:[{id:number, userid:number}]
       
  

}
