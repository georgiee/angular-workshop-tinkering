import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, query, transition, style, stagger, animate, group, sequence, state } from '@angular/animations';

@Component({
  selector: 'app-query-example',
  templateUrl: './query-example.component.html',
  styleUrls: ['./query-example.component.scss'],
  animations: [
    trigger('showBoxesOnLoad', [

      // transition(':enter', [
      //   group([
      //     animate('250ms', style({
      //       backgroundColor: 'hotpink'
      //     })),
      //     query('.panel', [
      //       style({ opacity: 0, transform: 'translateY(-100px)'}),
      //       stagger(-30, [
      //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
      //       ])
      //     ])
      //   ])
      // ])
      transition(':enter', [
        group([
          // query('.panel', [
          //   style({ opacity: 0, transform: 'translateY(-100px)'}),
          //   stagger(-30, [
          //     animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          //   ])
          // ]),
          group([
            query('h1', [
              style({ opacity: 0, transform: 'translateX(-100px)'}),
            ]),
            query('p', [
                style({ opacity: 0, transform: 'translateX(100px)'}),
            ]),
            query('button', [
                style({ opacity: 0, transform: 'translateX(-100px)'}),
            ]),
          ]),
          query('.panel', [
            stagger(30, [
              sequence([
                query('h1', [
                  animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ]),
                query('p', [
                  animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ]),
                query('button', [
                  animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ]),
              ])
            ])
          ])
        ])
      ])
    ])
  ]
})
export class QueryExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
