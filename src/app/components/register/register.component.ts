import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService,SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
submitted;
user:SocialUser;
loggedIn;
  constructor(
    formBuilder:FormBuilder,
    public router:Router,
    public authService:AuthService,
  
  ) {

    this.registerForm = formBuilder.group({
      'firstName':['',Validators.compose([Validators.required])],
      'lastName':['',Validators.compose([Validators.required])],
      'email':['',Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      'password':['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
   }

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

  register(){
    this.submitted = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      localStorage.setItem('login',JSON.stringify(this.registerForm.value))
      this.router.navigateByUrl('/login')
    }
  }

    signInWithFB(): void {
    event.preventDefault()
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
