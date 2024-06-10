import { TestBed } from '@angular/core/testing';

import { CareerCategoryService } from './career-category.service';

describe('CareerCategoryService', () => {
  let service: CareerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
