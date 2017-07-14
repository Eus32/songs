import { TestBed, inject } from '@angular/core/testing';

import { RESTSongsService } from './restsongs.service';

describe('RESTSongsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RESTSongsService]
    });
  });

  it('should be created', inject([RESTSongsService], (service: RESTSongsService) => {
    expect(service).toBeTruthy();
  }));
});
