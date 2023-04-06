import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleboxInfoComponent } from './stylebox-info.component';

describe('StyleboxInfoComponent', () => {
  let component: StyleboxInfoComponent;
  let fixture: ComponentFixture<StyleboxInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleboxInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleboxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
