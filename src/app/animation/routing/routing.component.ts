import { Component, OnInit } from '@angular/core';
import { RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    console.log(route.snapshot.params)
    route.paramMap.subscribe(params => {
      console.log(params.get('index'));
    });
  }

  ngOnInit() {
  }

}
