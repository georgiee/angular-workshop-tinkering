import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],

  animations: [
    // trigger('stateAnimation', [
    //   state('on', style({
    //     backgroundColor: 'red'
    //   })),

    //   state('off', style({
    //     backgroundColor: 'green'
    //   })),
    //   transition('void => *', [
    //     style({
    //       height: 0,
    //       overflow: 'hidden'
    //     }),
    //     animate('1s',
    //       style({
    //         height: '*',
    //         overflow: 'auto',
    //         backgroundColor: 'red'
    //       })
    //     )
    //   ]),
    //   transition('* <=> *', [
    //     animate('1s')
    //   ]),
    // ]),
    // trigger('pageAnimations', [
    //   transition(':enter', [
    //     query('.box', [
    //       style({opacity: 0, transform: 'translateY(-100px)'}),
    //       stagger(20, [
    //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
    //       ])
    //     ])
    //   ])
    // ]),
    trigger('boxAddRemoveAnimation', [
      transition(':enter', [
        style({
          height: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.4s', style({
          height: '*',
          transform: 'translateX(0)',
        })),
      ]),
      transition(':leave', [
        animate('0.4s', style({
          height: 0,
        }))
      ])
    ]),
    trigger('boxCounter', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({
            height: 0,
            transform: 'translateX(-100%)'
          }),
          animate('0.4s', keyframes([
            style({
              height: '*',
              transform: 'translateX(0)',
            })
          ]))
        ])
      ]),
    ]),
    trigger('keyframeTest', [
      transition(':enter', [
        animate('1s', keyframes([
          style({ backgroundColor: 'red' }), // offset = 0
          style({ backgroundColor: 'blue' }), // offset = 0.33
          style({ backgroundColor: 'orange' }), // offset = 0.66
          style({ backgroundColor: 'black' }) // offset = 1
        ]))
      ])
    ])
  ]
})
export class Page1Component implements OnInit {
  // @HostBinding('@stateAnimation')
  public state: 'on'|'off' = 'on';

  // @HostBinding('@pageAnimations')
  public pageAnimations = true;

  public boxCounter = 0;

  get boxes() {
    return Array.from(Array(this.boxCounter));
  }

  constructor() { }

  animationStarted(event) {
    console.log('animationStarted')
  }
  toggleState() {
    this.state = this.state === 'on' ? 'off' : 'on';
  }

  ngOnInit() {
  }

}
