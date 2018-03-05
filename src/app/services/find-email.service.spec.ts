import { TestBed, inject } from '@angular/core/testing';

import { FindEmailService } from './find-email.service';

describe('FindEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindEmailService]
    });
  });

  it('should be created', inject([FindEmailService], (service: FindEmailService) => {
    expect(service).toBeTruthy();
  }));
});
