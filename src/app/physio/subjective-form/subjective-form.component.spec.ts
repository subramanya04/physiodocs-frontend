import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectiveFormComponent } from './subjective-form.component';

describe('SubjectiveFormComponent', () => {
  let component: SubjectiveFormComponent;
  let fixture: ComponentFixture<SubjectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
