import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SometestComponent } from './sometest/sometest.component';
import { RoutingModule } from '../routing/routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', component: SometestComponent}
];

@NgModule({
  declarations: [SometestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SomeTestModule { }
