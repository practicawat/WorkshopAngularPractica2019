import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com2Component } from './comp2.component';

describe('Com2Component', () => {
  let component: Com2Component;
  let fixture: ComponentFixture<Com2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});