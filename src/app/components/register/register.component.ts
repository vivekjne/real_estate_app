import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
submitted;
  constructor(
    formBuilder:FormBuilder,
    public router:Router
  ) {

    this.registerForm = formBuilder.group({
      'firstName':['',Validators.compose([Validators.required])],
      'lastName':['',Validators.compose([Validators.required])],
      'email':['',Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      'password':['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
   }

  ngOnInit() {
  }

  register(){
    this.submitted = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      localStorage.setItem('login',JSON.stringify(this.registerForm.value))
      this.router.navigateByUrl('/login')
    }
  }
}
