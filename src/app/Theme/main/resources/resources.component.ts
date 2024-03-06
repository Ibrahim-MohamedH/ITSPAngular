import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent {
  caseStudy: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 1900,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  Blog: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 2100,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
}
