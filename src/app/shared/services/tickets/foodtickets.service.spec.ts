import { TestBed } from '@angular/core/testing';

import { FoodticketsService } from './foodtickets.service';

describe('FoodticketsService', () => {
  let service: FoodticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
