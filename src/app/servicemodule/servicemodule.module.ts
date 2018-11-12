import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';

const token = new InjectionToken('hello');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TestService,
    // {
    //   useValue: 123, provide: token
    // }
  ],
  exports: [
  ]
})
export class ServicemoduleModule { }
