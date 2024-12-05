import { TestBed } from '@angular/core/testing';

import { PratoEdicaoService } from './prato-edicao.service';

describe('PratoEdicaoService', () => {
  let service: PratoEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PratoEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
