import { TestBed } from '@angular/core/testing';

import { MockjsonService } from './mockjson.service';

describe('MockjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockjsonService = TestBed.get(MockjsonService);
    expect(service).toBeTruthy();
  });
});
