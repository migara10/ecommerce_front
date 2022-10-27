import { TestBed } from '@angular/core/testing';

import { ApiServiseService } from './api-servise.service';

describe('ApiServiseService', () => {
  let service: ApiServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
