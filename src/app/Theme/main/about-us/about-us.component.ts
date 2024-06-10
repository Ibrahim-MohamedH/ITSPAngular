import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  constructor(private route: ActivatedRoute) {}
  // ========= Swipper Angular =========
  chooseUs: SwiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: true,
    navigation: true,
    pagination: { clickable: true },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: -150,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1.3,
      slideShadows: true,
    },
  };
  // ====================================
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
