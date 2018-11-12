import { TestBed } from '@angular/core/testing';

import { UppercaseService } from './uppercase.service';

describe('UppercaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UppercaseService = TestBed.get(UppercaseService);
    expect(service).toBeTruthy();
  });
});
