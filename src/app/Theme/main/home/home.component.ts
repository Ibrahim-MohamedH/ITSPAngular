import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/controllers/services/project.service';
import { ReelService } from 'src/app/controllers/services/reel.service';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
// =====================
import * as AOS from 'aos'; // Import AOS
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  projects: any[] = [];
  reels: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private projectsApi: ProjectService,
    private reelsApi: ReelService
  ) {
    // this.projectsApi.get().subscribe((data: any) => {
    //   this.projects = data;
    // });
    // this.reelsApi.get().subscribe((data: any) => {
    //   this.reels = data;
    // });
  }

  // ========= Swipper Angular =========
  hero: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: -90,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: -150,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: -250,
      },
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1.3,
      slideShadows: true,
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
      1400: {
        slidesPerView: 4,
      },
    },
  };
  // team: SwiperOptions = {
  //   // modules: [Navigation],
  //   // navigation: true,
  //   loop: true,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       loop: true,
  //     },
  //     576: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //     1140: {
  //       slidesPerView: 4,
  //     },
  //   },
  // };

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
    // ==================AOS==================
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    // var particlesJS: any;
    // particlesJS.load(
    //   'hero',
    //   '../../../../assets/vendors/particles_js/particles.min.js',
    //   {
    //     particles: {
    //       number: {
    //         value: 80,
    //         density: {
    //           enable: true,
    //           value_area: 700,
    //         },
    //       },
    //       color: {
    //         value: '#e69c9c',
    //       },
    //       shape: {
    //         type: 'circle',
    //         stroke: {
    //           width: 0,
    //           color: '#000000',
    //         },
    //         polygon: {
    //           nb_sides: 5,
    //         },
    //       },
    //       opacity: {
    //         value: 0.5,
    //         random: false,
    //         anim: {
    //           enable: false,
    //           speed: 0.1,
    //           opacity_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //       size: {
    //         value: 3,
    //         random: true,
    //         anim: {
    //           enable: false,
    //           speed: 10,
    //           size_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //       line_linked: {
    //         enable: true,
    //         distance: 150,
    //         color: '#e69c9c',
    //         opacity: 0.4,
    //         width: 1,
    //       },
    //       move: {
    //         enable: true,
    //         speed: 2,
    //         direction: 'none',
    //         random: false,
    //         straight: false,
    //         out_mode: 'out',
    //         bounce: false,
    //         attract: {
    //           enable: false,
    //           rotateX: 600,
    //           rotateY: 1200,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       detect_on: 'canvas',
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: 'grab',
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         grab: {
    //           distance: 140,
    //           line_linked: {
    //             opacity: 1,
    //           },
    //         },
    //         bubble: {
    //           distance: 400,
    //           size: 40,
    //           duration: 2,
    //           opacity: 8,
    //           speed: 3,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //         push: {
    //           particles_nb: 4,
    //         },
    //         remove: {
    //           particles_nb: 2,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }
    // );
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
