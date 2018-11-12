import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseService } from '../uppercase.service';
import { Tester2Component } from '../tester2/tester2.component';
import { TesterComponent } from '../tester/tester.component';

@NgModule({
  declarations: [
    Tester2Component,
    TesterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TesterComponent
  ],
  providers: [
    {provide: UppercaseService, useFactory: () => {
      const service = new UppercaseService();
      service.source = 'fromFeature';
      console.log('service created', service.source);

      return service;
    } }

  ]
})
export class MyFeatureModule { }
