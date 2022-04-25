import { TestBed } from '@angular/core/testing';

import { NitteService } from './nitte.service';

describe('NitteService', () => {
  let service: NitteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NitteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
