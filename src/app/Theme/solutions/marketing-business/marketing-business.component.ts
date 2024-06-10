import { Component } from '@angular/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-marketing-business',
  templateUrl: './marketing-business.component.html',
  styleUrls: ['./marketing-business.component.css'],
})
export class MarketingBusinessComponent {
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
