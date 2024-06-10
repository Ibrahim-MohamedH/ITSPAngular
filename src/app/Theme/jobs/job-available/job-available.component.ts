import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-job-available',
  templateUrl: './job-available.component.html',
  styleUrls: ['./job-available.component.css'],
})
export class JobAvailableComponent {
  category!: string;
  slogan!: string;
  constructor(private route: ActivatedRoute) {
    if (this.route.snapshot.paramMap.get('category') == 'digital_marketing') {
      this.category = 'Digital Marketing';
      this.slogan = "Unleash Your Brand's Digital Superpowers with ITSP!";
    } else if (
      this.route.snapshot.paramMap.get('category') == 'software_house'
    ) {
      this.category = 'Software';
      this.slogan =
        'We “potential” “Empower” “Cultivate” your business with our transformativeSoftware Solutions.';
    } else if (
      this.route.snapshot.paramMap.get('category') ==
      'marketing_&_business_house'
    ) {
      this.category = 'Marketing And Business';
      this.slogan =
        'Unleash the full potential of your brand with our marketing magic!';
    }
  }
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
