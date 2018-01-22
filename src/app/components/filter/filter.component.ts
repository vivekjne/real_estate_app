import { Component, OnInit,ViewChild,ElementRef,AfterViewInit,NgZone } from '@angular/core';
import * as gsap from 'greensock';
import { MapsAPILoader} from "@agm/core";
import { FormControl } from "@angular/forms";
declare var google:any;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LocationService } from '../../location.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   public searchControl: FormControl;
lat: number = 51.678418;
  lng: number = 7.809007;
  type_toggle:boolean = false;
  feature_toggle:boolean = false;
  someRange = 650;
  military_toggle:boolean = false;
  occupancy_toggle:boolean = false;
  
  @ViewChild('slider',{ read: ElementRef }) slider:ElementRef;
   @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(
       private mapsAPILoader:MapsAPILoader,
  private ngZone:NgZone,
  public router:Router,
  public locationService:LocationService
  ) { 
    
  }

  ngOnInit() {
    // let slider = document.querySelector('nouislider');
     this.searchControl = new FormControl();
    console.log(this.slider.nativeElement);
    gsap.TweenLite.to('#slide',0,{x:'100%'});
    gsap.TweenLite.to('#slide',0.2,{x:'0%'});
    this.mapsAPILoader.load().then(()=>{
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{
        // types: ['address'],
        componentRestrictions: {country: 'us'}
      })

      autocomplete.addListener("place_changed",()=>{
        this.ngZone.run(()=>{
          let place = autocomplete.getPlace();
          console.log(place);
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        
        })
      })
    })
  }

  ngAfterViewInit(){
      this.slider.nativeElement.querySelector('.noUi-connects').style = 'background:linear-gradient(to right, red,orange,yellow,green); '
  }

  typeToggle(){

    this.type_toggle = this.type_toggle==false?true:false;
    
  }


    featureToggle(){

    this.feature_toggle = this.feature_toggle==false?true:false;
    
  }

  militaryToggle(){
    this.military_toggle = this.military_toggle==false?true:false;
  }

  occupancyToggle(){
    this.occupancy_toggle = this.occupancy_toggle==false?true:false;
    
  }
goHome(){
  gsap.TweenLite.to('#slide',0.4,{x:'100%'});
  setTimeout(()=>{
this.router.navigateByUrl('/')
 
},400)
}
saveFilter(){
   gsap.TweenLite.to('#slide',0.4,{x:'100%'});
  setTimeout(()=>{
this.router.navigate(['/'],{queryParams:{lat:this.lat,lng:this.lng}})
 
},400)
}
}
