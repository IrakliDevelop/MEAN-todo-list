import { TestBed } from '@angular/core/testing';

import { GetAllTodosService } from './get-all-todos.service';

describe('GetAllTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllTodosService = TestBed.get(GetAllTodosService);
    expect(service).toBeTruthy();
  });
});
