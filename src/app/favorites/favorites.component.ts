import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
 lat: number = 51.678418;
  lng: number = 7.809007;
  isNotFilter:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
