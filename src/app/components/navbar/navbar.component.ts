import { Component, OnInit } from '@angular/core';
import * as gsap from 'greensock';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
nav_close = true;
  constructor() { }

  ngOnInit() {
  }
sidemenu(){
if(this.nav_close==false){
  this.nav_close = true;
let tleft = document.getElementById("top-left");
let rleft = document.getElementById("top-right");
console.log(tleft);
tleft.classList.remove("col-md-10");
tleft.classList.add("col-md-12")
rleft.style.display = 'none'
}else{
  this.nav_close = false;
  let tleft = document.getElementById("top-left");
let rleft = document.getElementById("top-right");
console.log(tleft);
tleft.classList.remove("col-md-12");
tleft.classList.add("col-md-10")
rleft.style.display = 'block'
}
}
}
