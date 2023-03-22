import { TestBed } from '@angular/core/testing';

import { UpdatecoverService } from './updatecover.service';

describe('UpdatecoverService', () => {
  let service: UpdatecoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
