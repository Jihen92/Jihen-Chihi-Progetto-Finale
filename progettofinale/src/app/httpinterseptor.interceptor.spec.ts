import { TestBed } from '@angular/core/testing';

import { HttpinterseptorInterceptor } from './httpinterseptor.interceptor';

describe('HttpinterseptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpinterseptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpinterseptorInterceptor = TestBed.inject(HttpinterseptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
