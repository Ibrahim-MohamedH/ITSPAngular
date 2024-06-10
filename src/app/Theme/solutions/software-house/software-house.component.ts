import { Component } from '@angular/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-software-house',
  templateUrl: './software-house.component.html',
  styleUrls: ['./software-house.component.css'],
})
export class SoftwareHouseComponent {
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
