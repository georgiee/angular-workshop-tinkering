import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { TimesPipe } from '../times.pipe';

@NgModule({
  declarations: [TimesPipe, Page1Component],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ],
  exports: [
    Page1Component
  ]
})
export class RoutingModule { }
