import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-secondnav',
  templateUrl: './secondnav.component.html',
  styleUrls: ['./secondnav.component.css']
})
export class SecondnavComponent implements OnInit {
is_loggedIn;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('isLogged')){
      if(localStorage.getItem('isLogged')=="true"){
        this.is_loggedIn = true;
      }
    }
  }

}
