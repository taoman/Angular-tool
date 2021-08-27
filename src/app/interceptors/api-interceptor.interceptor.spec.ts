import { TestBed } from '@angular/core/testing';

import { ApiInterceptorInterceptor } from './api-interceptor.interceptor';

describe('ApiIntercerptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiInterceptorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ApiInterceptorInterceptor = TestBed.inject(
      ApiInterceptorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
