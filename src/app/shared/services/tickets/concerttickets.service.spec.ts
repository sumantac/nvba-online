import { TestBed } from '@angular/core/testing';

import { ConcertticketsService } from './concerttickets.service';

describe('ConcertticketsService', () => {
  let service: ConcertticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
