import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { User } from '../models/user/User';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Credential } from '../models/user/Credential';
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  constructor(
    private userService:UserService,
    private storageService: StorageService,
    private router: Router
  ){}

  myPayloadUser = new User();
  //myNewUser = new User();
  myCredential = new Credential();
 
  
  crearUser() {
    console.log(this.myPayloadUser);
 
  this.userService.createUser(this.myPayloadUser)
     .subscribe(({ data }) => {
        console.log('got data', data);
 
        //alert(JSON.stringify(this.myUser));
 
        this.myCredential.username = this.myPayloadUser.username;
        this.myCredential.password = this.myPayloadUser.password;
 
        this.userService.tokenAuth(this.myCredential)
        .subscribe(({ data }) => {
           console.log('logged: ', JSON.stringify(data));
 
           this.storageService.setSession("user", this.myPayloadUser.username);
           this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
          
          alert("User created : " + JSON.stringify(data));
 
          this.router.navigate(['/home']);
 
        }, (error) => {
           console.log('error logging user : ', error);
           alert(error);
           
        });
      
 
 
 
     }, (error) => {
        console.log('error creating user : ', error);
        this.myPayloadUser.username = "";
        this.myPayloadUser.email = "";
        this.myPayloadUser.password = "";
        alert(error);
     });
   
   
 
 
  } 
 
 }
