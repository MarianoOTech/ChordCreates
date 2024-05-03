import { Injectable } from '@angular/core';
import { Credential } from '../app/models/user/Credential';
import { User } from '../app/models/user/User';
import { Token } from '../app/models/user/Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(){}
  postLogin(myCredential: Credential): Token {

    console.log("login.... "+myCredential.email);
    console.log("contraseña... "+myCredential.password);

    var myToken = new Token();
    //llamada falsa
    if(myCredential.email=="mariano@gmail.com" && myCredential.password=="1234"){
      myToken.ID ="0001";
      myToken.user="Mariano";
      myToken.token="123456";
    }
    else{
      myToken.ID = "0";
      myToken.user = "error user";
      myToken.token = "";
    } 
    return myToken;
  }

  crearUser(myUser: User): User{

    console.log("email.... "+myUser.email);
    console.log("contraseña... "+myUser.password);

    var myNewUser = new User();

    //llamada falsa
    //Succes 
    myNewUser.id = 0;

    if(myNewUser.id !=0){
      console.log("Succes"+ myNewUser.id)
      myNewUser.id = 1; //Exito shavos
      myNewUser.Name = myUser.Name;
      myNewUser.email= myUser.email;
      myNewUser.password = myUser.password;
    }
    else{
      console.log("Error: "+myNewUser.id)
      myNewUser.id = 0; //Error
    } 
    return myNewUser;
  }


  resetPassword(email : String, password : String, token : String): String {
    //call reset password api
    var isResetPassword = 1;
    this.destroyToken(token);
    return ""+isResetPassword;
  }

  sendUrlResetPassword(email: String): User {
    var myUser = this.validateUser(email);
    console.log("email ... " + email);

    if (myUser.id != 0) {

      var myUrlReset = this.createUrlReset(myUser.email);
      console.log(myUrlReset);
      var sendEmail = this.sendEmail(myUser.email, myUrlReset);
      console.log(sendEmail);
    }

    return myUser;
  }

  sendEmail(email : String, urlRset: String): String {
    var emailSuccess = 0;
    //send email using SMTP (gmail, outlook, etc)
    //email sent
    emailSuccess = 1;
    console.log('sent to :' + email);
    console.log('url reset :' + urlRset);
    return ""+emailSuccess;
  }

  createUrlReset(email: String) : String {
    var myUrlReset =
      '' +
      this.createBaseURL() +
      '/' +
      email +
      '/' +
      this.createTokenReset(email);

     return myUrlReset;
  }

  createBaseURL():String{
    //call process to create base url
    var baseURL="http://localhost:4200/reset-password";
    return baseURL;
  }

  createTokenReset(email : String):String{
    //JWT create a token to encrypt the email
    var SECRET_KEY = "safcli";
    var myToken = "jksandjiu389eu3i2uhd8n4r";
    return myToken;
  }

  validateUser(email: String) : User{
    //llamada falsa
    var myUser = new User();
    //Succes 
    myUser.id =0;
    if ( email == "adsoft@live.com.mx" )
      {
      console.log("Succes "+ myUser.id)
      myUser.id = 1; //Exito shavos
      myUser.Name = "mariano";
      myUser.email= email;
      myUser.password = "";
    }
    else{
      console.log("Error: "+myUser.id)
      myUser.id = 0; //Error
    } 
    return myUser;
  }

  validateToken(email: String, token: String) : String {
    // call api to validate token 
    console.log('validating token ... ' + token);
    var validToken = 1;
    return ""+validToken;

  }
  destroyToken(token: String) : String {

    // call api to destroy token
    var istokenDestroyed = 1;
    console.log('destroying token ... ' + token);
    return "" + istokenDestroyed;
  }

  /*resetrealPassword(email : String, password : String, token : String): String {
    var isSuccess = 0;
    //call fake query api by email
      if(email == "adsoft@live.com.mx")
        {
          console.log("Success"+isSuccess);
          isSuccess=1;//Success
          this.destroyToken(token);
          console.log("destroyed"+token);
        }
        else{ 
  
          isSuccess=0
          console.log("Error"+isSuccess);
  }
  return ""+isSuccess;
  
  }*/
}
