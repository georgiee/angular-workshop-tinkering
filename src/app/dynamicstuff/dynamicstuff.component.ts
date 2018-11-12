import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewRef, ViewContainerRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { UnicornComponent } from './unicorn/unicorn.component';

@Component({
  selector: 'app-dynamicstuff',
  templateUrl: './dynamicstuff.component.html',
  styleUrls: ['./dynamicstuff.component.scss']
})
export class DynamicstuffComponent implements AfterViewInit {
  @ViewChild('unicorns', {read: ViewContainerRef}) unicornsContainer: ViewContainerRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
      // unicornComponent.create(this.i)
      // throw new Error('bad bad error');
    }

  ngAfterViewInit() {
    const unicornComponent = this.componentFactoryResolver.resolveComponentFactory(UnicornComponent);
    this.unicornsContainer.createComponent(unicornComponent);
    this.unicornsContainer.createComponent(unicornComponent);
    this.unicornsContainer.createComponent(unicornComponent);
  }

}
