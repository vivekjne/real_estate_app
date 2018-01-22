import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LocationService } from '../../location.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 lat: number = 51.678418;
  lng: number = 7.809007;
  isNotFilter:boolean = true;
  constructor(
     private route: ActivatedRoute,
  private router: Router,
 public locationService:LocationService
  ) { }

  ngOnInit() {
this.route.queryParams.subscribe(res=>{
  console.log(res);
  if(res.lat!=null && res.lng!==null){
  this.lat = +res.lat;
  this.lng = +res.lng
  }
})
 
    if(this.router.url=='/filter'){
      this.isNotFilter = false;
    }
  }

}
