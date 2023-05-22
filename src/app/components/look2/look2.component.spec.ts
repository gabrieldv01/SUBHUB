import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Look2Component } from './look2.component';

describe('Look2Component', () => {
  let component: Look2Component;
  let fixture: ComponentFixture<Look2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Look2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Look2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
