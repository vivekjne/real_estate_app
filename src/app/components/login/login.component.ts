import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService,SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
loggedIn;
user:SocialUser
  constructor(
    public router:Router,
    public authService:AuthService,
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        localStorage.setItem('isLogged','true')
        this.router.navigateByUrl('/');
      }
    });
  }

  login(){
    if(localStorage.getItem('login')){
      let user = JSON.parse(localStorage.getItem('login'));
      console.log(user);
        if(this.email == user.email && this.password == user.password){
          localStorage.setItem("isLogged","true")
          this.router.navigateByUrl('/');
        }
    }
  
  }

   signInWithFB(): void {
   event.preventDefault();
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
