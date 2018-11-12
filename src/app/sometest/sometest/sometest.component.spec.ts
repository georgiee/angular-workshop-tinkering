import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SometestComponent } from './sometest.component';

describe('SometestComponent', () => {
  let component: SometestComponent;
  let fixture: ComponentFixture<SometestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SometestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SometestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
