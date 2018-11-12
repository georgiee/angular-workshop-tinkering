import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../routing/routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
const routes: Routes = [
  {path: '', component: HelloComponent}
];

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SomeTestModule { }
