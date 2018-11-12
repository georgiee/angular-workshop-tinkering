import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryExampleComponent } from './animation/query-example/query-example.component';
import { Page1Component } from './routing/page1/page1.component';
import { RoutingComponent } from './animation/routing/routing.component';

const routes: Routes = [

  {
    path: 'sometest',
    loadChildren: './sometest/sometest.module#SomeTestModule'
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  },
  {
    path: 'query-example',
    component: QueryExampleComponent
  },
  {
    path: 'router-example', pathMatch: 'full',
    redirectTo: 'router-example/1'
  },
  {
    path: 'router-example/:index',
    component: RoutingComponent,
  },
  {
    path: 'router-example',
    component: RoutingComponent,
  },
  {
    path: '', pathMatch: 'full',
    redirectTo: 'routing/1'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
