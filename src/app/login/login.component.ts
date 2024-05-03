import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Credential } from '../models/user/Credential';
import { Router } from '@angular/router';
import { Token } from '../models/user/Token';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private userService:UserService,
    private router: Router
  ){}
  email: String ="";
  password: String = ""; 
  MyLogin = new Token();

  callLogin(){
    //alert("Login...");
    var myCredential = new Credential();
    myCredential.email = this.email;
    myCredential.password = this.password;

    this.MyLogin = this.userService.postLogin(myCredential);
    
    if(this.MyLogin.token != ""){
      this.router.navigate(['/home']);
    }
    console.log(this.MyLogin)
  }
}