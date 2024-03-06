import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  apply: boolean = false;
  summary: boolean = false;
  experience!: string;
  cv!: any;
  invalide!: boolean;
  constructor(private router: Router, private active: ActivatedRoute) {
    // if (this.router.url != '/') {
    //   console.log(this.router.url.split('/')[1]);
    // }
  }

  showApply() {
    this.apply = true;
  }
  // this.experience.trim() != '' || this.experience != null
  next() {
    try {
      if (Number.isInteger(JSON.parse(this.experience))) {
        this.apply = !this.apply;
        this.summary = !this.summary;
        this.invalide = false;
      }
    } catch {
      this.invalide = true;
    }
  }
  prev() {
    this.apply = !this.apply;
    this.summary = !this.summary;
  }
  submit() {
    this.summary = !this.summary;
    if (this.experience != null) {
      alert('Application Submitted!');
    }
  }
  close() {
    this.apply = false;
    this.summary = false;
  }
}
