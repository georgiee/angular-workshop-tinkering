import { TestBed } from '@angular/core/testing';

import { LazyServiceService } from './lazy-service.service';

describe('LazyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyServiceService = TestBed.get(LazyServiceService);
    expect(service).toBeTruthy();
  });
});
