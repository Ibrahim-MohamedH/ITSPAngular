import { Component } from '@angular/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.css'],
})
export class JobCategoriesComponent {
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
