import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WomensHealthComponent } from './WomensHealth.component';

describe('WomensHealthComponent', () => {
  let component: WomensHealthComponent;
  let fixture: ComponentFixture<WomensHealthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

             