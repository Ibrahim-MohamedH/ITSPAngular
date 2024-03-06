import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  sectionNav(sectionId: string) {
    this.router.navigate(['home', sectionId]);
  }
}
