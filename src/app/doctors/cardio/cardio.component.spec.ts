import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardioComponent } from './cardio.component';

describe('CardioComponent', () => {
  let component: CardioComponent;
  let fixture: ComponentFixture<CardioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
