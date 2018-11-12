import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicstuffComponent } from './dynamicstuff.component';
import { UnicornComponent } from './unicorn/unicorn.component';

@NgModule({
  declarations: [
    DynamicstuffComponent,
    UnicornComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicstuffComponent
  ],
  entryComponents: [
    UnicornComponent
  ]
})
export class DynamicstuffModule { }
