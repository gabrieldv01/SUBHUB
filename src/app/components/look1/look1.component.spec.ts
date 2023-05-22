import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Look1Component } from './look1.component';

describe('Look1Component', () => {
  let component: Look1Component;
  let fixture: ComponentFixture<Look1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Look1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Look1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
