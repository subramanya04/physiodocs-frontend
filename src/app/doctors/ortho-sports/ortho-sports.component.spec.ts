import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthoSportsComponent } from './ortho-sports.component';

describe('OrthoSportsComponent', () => {
  let component: OrthoSportsComponent;
  let fixture: ComponentFixture<OrthoSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthoSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthoSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
