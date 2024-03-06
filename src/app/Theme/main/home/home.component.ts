import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) {}
  // ========= Swipper Angular =========
  hero: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: -80,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1.3,
      slideShadows: false,
    },
  };
  portfolio: SwiperOptions = {
    // modules: [Navigation],
    // navigation: true,
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
  team: SwiperOptions = {
    // modules: [Navigation],
    // navigation: true,
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
      1140: {
        slidesPerView: 4,
      },
    },
  };

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
    // =======================================
    let mainReel: any = document.querySelector('#reels .mainReel');
    let subReels: any = document.querySelectorAll('#reels .subReel .card');
    let mainReelUrl: any = mainReel.querySelector('iframe');
    let mainReelImg: any = mainReel.querySelector('img');
    let mainReelTitle: any = mainReel.querySelector('h5');
    let mainReelCategory: any = mainReel.querySelector('a');
    let mainReelDesc: any = mainReel.querySelector('p');
    for (let i = 0; i < subReels.length; i++) {
      subReels[i].querySelector('.reelCover').addEventListener('click', () => {
        let holderTitle = mainReelTitle.innerText;
        let holderCategory = mainReelCategory.innerText;
        let holderDesc = mainReelDesc.innerText;
        let holderUrl = mainReelUrl.src;
        let holderImg = mainReelImg.src;
        // ======= Main =======
        mainReelTitle.innerText = subReels[i].querySelector('h5').innerText;
        mainReelCategory.innerText = subReels[i].querySelector('a').innerText;
        mainReelDesc.innerText = subReels[i].querySelector('p').innerText;
        mainReelUrl.src = subReels[i]
          .querySelector('img')
          .getAttribute('data-reelUrl');
        mainReelImg.src = subReels[i].querySelector('img').src;
        // ======= Subs =======
        subReels[i].querySelector('h5').innerText = holderTitle;
        subReels[i].querySelector('a').innerText = holderCategory;
        subReels[i].querySelector('p').innerText = holderDesc;
        subReels[i]
          .querySelector('img')
          .setAttribute('data-reelUrl', holderUrl);
        subReels[i].querySelector('img').src = holderImg;
      });
    }
  }
}
