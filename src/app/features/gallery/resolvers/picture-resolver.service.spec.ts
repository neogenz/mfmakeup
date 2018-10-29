import { TestBed, inject } from '@angular/core/testing';

import { PictureResolverService } from './picture-resolver.service';

describe('PictureResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureResolverService]
    });
  });

  it('should be created', inject([PictureResolverService], (service: PictureResolverService) => {
    expect(service).toBeTruthy();
  }));
});
