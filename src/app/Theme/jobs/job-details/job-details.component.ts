import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  apply: boolean = false;
  part1: boolean = true;
  part2: boolean = false;
  // apply form
  name!: string;
  email!: string;
  country_code!: string;
  phone!: string;
  city!: string;
  year!: string;
  month!: string;
  day!: string;
  gender!: string;
  experience!: string;
  noticePeriod!: string;
  // end of apply form
  invalide!: boolean;
  invalide2!: boolean;
  category!: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.category = '/jobs/' + this.route.snapshot.paramMap.get('category');
  }

  showApply() {
    this.apply = true;
  }
  // this.experience.trim() != '' || this.experience != null
  next() {
    if (
      this.name != null &&
      this.name.trim() != '' &&
      this.email != null &&
      this.email.trim() != '' &&
      this.country_code != null &&
      this.country_code.trim() != '' &&
      this.phone != null &&
      this.phone.trim() != '' &&
      this.city != null &&
      this.city.trim() != '' &&
      this.year != null &&
      this.year.trim() != '' &&
      this.month != null &&
      this.month.trim() != '' &&
      this.day != null &&
      this.day.trim() != '' &&
      this.gender != null &&
      this.gender.trim() != ''
    ) {
      this.part1 = !this.part1;
      this.part2 = !this.part2;
      this.invalide = false;
    } else {
      console.log('2');
      this.invalide = true;
    }
  }
  prev() {
    this.part1 = !this.part1;
    this.part2 = !this.part2;
  }
  submit() {
    if (
      this.experience != null &&
      this.experience.trim() != '' &&
      this.noticePeriod != null &&
      this.noticePeriod.trim() != ''
    ) {
      this.apply = !this.apply;
      alert('Application Submitted!');
      this.invalide2 = false;
    } else {
      this.invalide2 = true;
    }
  }
  close() {
    this.apply = false;
    this.part1 = true;
    this.part2 = false;
  }
}
