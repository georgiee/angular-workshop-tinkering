import { Component, HostBinding, ViewChild } from '@angular/core';
import { trigger, query, style, transition, animate, group, animateChild, sequence, useAnimation, animation } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { LazyServiceService } from './lazy/lazy-service.service';
import { TestService } from './servicemodule/test.service';

const backgroundAnimated = animation([
  animate('{{speed}}', style({
    backgroundColor: '{{backgroundColor}}'
  }))
]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('leftRight', [
      transition('* => *', [
        backgroundAnimated
      ])
    ]),
    trigger('routeAnimations', [
      transition('* <=> *', [
        sequence([
          query('.content', [
            style({
              opacity: 0
            }),
            animate('1s', style({
              opacity: 1
            }))
          ]),
          query('@*', [
            animateChild()
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  @ViewChild('yourOutlet') outlet: RouterOutlet;


  private moveSignalSubject = new BehaviorSubject({
    value: 'left',
    params: {
      speed: '1s',
      backgroundColor: 'red'
    }
  });


  public state = 'left';

  public moveSignalObservable = this.moveSignalSubject.asObservable();

  constructor(private service: TestService) {
    this.moveSignalObservable.subscribe(value => {
      // this.state = value;
      console.log('new move signal', value);
    });
  }

  next() {
    this.moveSignalSubject.next({
      value: 'left',
      params: {
        speed: '250ms',
        backgroundColor: 'red'
      }
    });
  }

  prev() {
    this.moveSignalSubject.next({
      value: 'right',
      params: {
        speed: '2s',
        backgroundColor: 'green'
      }
    });
  }

  // @HostBinding('@routeAnimations')
  get routerState() {
    return this.outlet.isActivated && this.outlet.activatedRoute.routeConfig.path;
  }
}
