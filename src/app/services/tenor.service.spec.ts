import { TestBed, inject } from '@angular/core/testing';

import { TenorService } from './tenor.service';

describe('TenorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenorService]
    });
  });

  it('should be created', inject([TenorService], (service: TenorService) => {
    expect(service).toBeTruthy();
  }));
});
