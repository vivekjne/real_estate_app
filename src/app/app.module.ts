import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { SettingsComponent } from './components/settings/settings.component';
import { SecondnavComponent } from './components/secondnav/secondnav.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LocationService } from './location.service';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import {  FacebookLoginProvider } from "angular4-social-login";
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'filter', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavoritesComponent },
  
  
  
  
];


let config = new AuthServiceConfig([
  
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("212091769350302")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingsComponent,
    SecondnavComponent,
    FilterComponent,
    LoginComponent,
    RegisterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4QYC6bZAp2tJzXj5_amV97rRuggGkTKs',
      libraries:["places"],
    }),
     RouterModule.forRoot(
      appRoutes,
      // <-- debugging purposes only
    ),
    NouisliderModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
