import { TestBed } from '@angular/core/testing';

import { LoadinginterceptorService } from './loadinginterceptor.service';

describe('LoadinginterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadinginterceptorService = TestBed.get(LoadinginterceptorService);
    expect(service).toBeTruthy();
  });
});
