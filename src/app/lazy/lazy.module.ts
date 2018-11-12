import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { LazyServiceService } from './lazy-service.service';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
  ]
})
export class LazyModule { }
