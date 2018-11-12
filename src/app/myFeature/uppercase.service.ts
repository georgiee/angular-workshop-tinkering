import { Injectable, Optional } from '@angular/core';

@Injectable()
export class UppercaseService {
  public source = 'n/a';

  constructor() {
    console.log('new uppercase serice created');
  }


  transform(value: string) {
    return value.toUpperCase();
  }
}
