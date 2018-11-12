import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicstuffComponent } from './dynamicstuff.component';

describe('DynamicstuffComponent', () => {
  let component: DynamicstuffComponent;
  let fixture: ComponentFixture<DynamicstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
