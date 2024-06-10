import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { JobCategory } from 'src/app/models/jobCategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobCategoryService extends ApiFunctionService<JobCategory> {
  constructor(http: HttpClient) {
    super(http, '');
  }
}
