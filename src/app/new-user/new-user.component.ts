import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { User } from '../models/user/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    private router: Router
  ){}

  myPayloadUser = new User();
  myNewUser = new User();
  
  crearUser(){
    console.log(this.  myPayloadUser);

    this.myNewUser = this.userService.crearUser(
      this. myPayloadUser
    );
    console.log(this.myNewUser);

    if(this.myNewUser.id !=0){
      this.router.navigate(['/login'])
      console.log("si se pudo")
    }else{
      console.log("no se pudo")
    }
  }
  
}
