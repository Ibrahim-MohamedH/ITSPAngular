import { Component } from '@angular/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css'],
})
export class DigitalMarketingComponent {
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
