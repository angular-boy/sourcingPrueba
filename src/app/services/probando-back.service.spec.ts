import { TestBed, inject } from '@angular/core/testing';

import { ProbandoBackService } from './probando-back.service';

describe('ProbandoBackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProbandoBackService]
    });
  });

  it('should be created', inject([ProbandoBackService], (service: ProbandoBackService) => {
    expect(service).toBeTruthy();
  }));
});
