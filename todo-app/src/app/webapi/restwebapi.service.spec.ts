import { TestBed } from '@angular/core/testing';

import { RestWebApiService } from './restwebapi.service';

describe('RestwebapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestWebApiService = TestBed.get(RestWebApiService);
    expect(service).toBeTruthy();
  });
});
