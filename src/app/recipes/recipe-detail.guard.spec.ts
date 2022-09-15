import { TestBed } from '@angular/core/testing';

import { recipeDetailGuard } from './recipe-detail.guard';

describe('recipeDetailGuard', () => {
  let guard: recipeDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(recipeDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
