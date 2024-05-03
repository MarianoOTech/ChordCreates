import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../models/user/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, FormsModule, FormsModule, RouterLinkActive, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email : String = "";
  token : String = "";
  password : String = "";
  confirmpassword : String = "";

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserService){ 
    //this.route.params.subscribe( res=> console.log(res['email']));
    console.log(this.route.snapshot.params['email']);
    console.log(this.route.snapshot.params['token']);
    this.email = this.route.snapshot.params['email'];
    this.token = this.route.snapshot.params['token'];
  }

  callResetPassword() {
    console.log(this.password);
    console.log(this.confirmpassword);

    var myValidToken =this.userService.validateToken(this.email, this.token);
    if (myValidToken == "1"){
      var myResetPassword = this.userService.resetPassword(this.email, this.password, this.token);
      console.log('Reset Password '+myResetPassword);
      //call destry token
      console.log('Destroy Token '+this.userService.destroyToken(this.token));
    }

  }
}
