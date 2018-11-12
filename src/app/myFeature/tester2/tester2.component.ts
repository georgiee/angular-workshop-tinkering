import { Component, OnInit } from '@angular/core';
import { UppercaseService } from '../uppercase.service';

@Component({
  selector: 'app-tester2',
  templateUrl: './tester2.component.html',
  styleUrls: ['./tester2.component.scss'],
})
export class Tester2Component implements OnInit {

  constructor(private service: UppercaseService) {
    console.log('service received', service.source);
  }

  ngOnInit() {
  }

}
