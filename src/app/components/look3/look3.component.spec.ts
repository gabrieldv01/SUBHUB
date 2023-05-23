import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Look3Component } from './look3.component';

describe('Look3Component', () => {
  let component: Look3Component;
  let fixture: ComponentFixture<Look3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Look3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Look3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
