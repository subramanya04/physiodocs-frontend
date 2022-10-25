import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPageComponent } from './physio-page.component';

describe('PhysioPageComponent', () => {
  let component: PhysioPageComponent;
  let fixture: ComponentFixture<PhysioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
