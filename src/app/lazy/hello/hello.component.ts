import { Component, OnInit } from '@angular/core';
import { LazyServiceService } from '../lazy-service.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private lazy: LazyServiceService) {
    lazy.ping();
  }

  ngOnInit() {
  }

}
