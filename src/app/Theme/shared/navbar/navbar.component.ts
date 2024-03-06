import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  sectionNav(sectionId: string) {
    this.router.navigate(['home', sectionId]);
  }
}
