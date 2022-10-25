import { TestBed } from '@angular/core/testing';

import { PhysioFormService } from './physio-form.service';

describe('PhysioFormService', () => {
  let service: PhysioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
