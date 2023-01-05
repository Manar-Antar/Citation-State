import { TestBed } from '@angular/core/testing';

import { GetCitationStateService } from './get-citation-state.service';

describe('GetCitationStateService', () => {
  let service: GetCitationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCitationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
