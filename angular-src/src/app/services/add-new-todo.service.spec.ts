import { TestBed } from '@angular/core/testing';

import { AddNewTodoService } from './add-new-todo.service';

describe('AddNewTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewTodoService = TestBed.get(AddNewTodoService);
    expect(service).toBeTruthy();
  });
});
