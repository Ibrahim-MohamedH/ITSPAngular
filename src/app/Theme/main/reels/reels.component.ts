import { Component } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css'],
})
export class ReelsComponent {
  ngOnInit() {
    let showReel: any = document.querySelector('.bigScreen');
    let mainFrame: any = document.querySelector('.bigScreen iframe');
    let allReels: any = document.querySelectorAll('#allReels .card img');
    let covers: any = document.querySelectorAll('.blackout');
    if (allReels) {
      for (let i = 0; i < allReels.length; i++) {
        covers[i].addEventListener('click', () => {
          mainFrame.src = allReels[i].getAttribute('data-reelUrl');
          showReel.classList.remove('hidden');
        });
      }
      showReel.addEventListener('click', () => {
        mainFrame.src = '';
        showReel.classList.add('hidden');
      });
    }
  }
}
