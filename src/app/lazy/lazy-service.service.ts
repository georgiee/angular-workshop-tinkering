import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyServiceService {

  constructor(

  ) {
    console.log('lazy service created');
  }

  ping() {
    console.log('p[ing lazy service');
  }
}
