import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name!: string;
  phone!: string;
  email!: string;
  company!: string;
  url!: string;
  extra!: string;
  message!: string;
  thankYouMessage: boolean = false;

  constructor() {}
  submit() {
    this.thankYouMessage = true;
  }
  close() {
    this.thankYouMessage = false;
  }
}
