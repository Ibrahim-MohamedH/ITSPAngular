import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loc-camp',
  templateUrl: './loc-camp.component.html',
  styleUrls: ['./loc-camp.component.css'],
})
export class LocCampComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const sectionId = params['sectionId'];
      if (sectionId) {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
