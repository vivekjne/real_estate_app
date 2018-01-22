import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject'
@Injectable()
export class LocationService {
locationSubject = new Subject();
  constructor() {
    
   }

   getLocationData(data){
     this.locationSubject.next(data);
   }

}
