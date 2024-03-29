import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleboxComponent } from './stylebox.component';

describe('StyleboxComponent', () => {
  let component: StyleboxComponent;
  let fixture: ComponentFixture<StyleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
