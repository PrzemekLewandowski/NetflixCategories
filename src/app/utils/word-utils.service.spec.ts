import { TestBed } from '@angular/core/testing';

import { WordUtilsService } from './word-utils.service';

describe('WordCounterService', () => {
  let service: WordUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
