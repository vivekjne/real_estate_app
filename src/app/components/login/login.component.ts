import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    
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

}
