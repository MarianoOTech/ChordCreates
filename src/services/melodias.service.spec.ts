import { TestBed } from '@angular/core/testing';

import { MelodiasService } from './melodias.service';

describe('MelodiasService', () => {
  let service: MelodiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MelodiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
