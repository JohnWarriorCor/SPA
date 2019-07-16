import { TestBed } from '@angular/core/testing';

import { InvocadoresService } from './invocadores.service';

describe('InvocadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvocadoresService = TestBed.get(InvocadoresService);
    expect(service).toBeTruthy();
  });
});
