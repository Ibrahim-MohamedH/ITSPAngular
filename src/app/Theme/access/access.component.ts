import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiFunctionService } from 'src/app/controllers/services/api-function.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
})
export class AccessComponent {
  message!: string;
  // arrays for option in register Form
  years: number[] = [];
  days: number[] = [];
  // Login object
  login = {
    email: '',
    password: '',
  };
  // Register validation
  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    birthYear: new FormControl('', [Validators.required]),
    birthMonth: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    accept: new FormControl('', [Validators.required]),
  });
  // get values
  get name() {
    return this.register.get('name');
  }
  get email() {
    return this.register.get('email');
  }
  get password() {
    return this.register.get('password');
  }
  get confirmPassword() {
    return this.register.get('confirmPassword');
  }
  get phone() {
    return this.register.get('phone');
  }
  get city() {
    return this.register.get('city');
  }
  get area() {
    return this.register.get('area');
  }
  get birthYear() {
    return this.register.get('birthYear');
  }
  get birthMonth() {
    return this.register.get('birthMonth');
  }
  get birthDay() {
    return this.register.get('birthDay');
  }
  get gender() {
    return this.register.get('gender');
  }
  get accept() {
    return this.register.get('accept');
  }
  // end of get values
  constructor(private http: HttpClient) {
    this.http
      .get('https://b6e6-156-193-118-55.ngrok-free.app/api/v1/applicant', {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
      .subscribe((res: any) => {
        console.log(res.data.data);
      });
    // loop for option in register Form
    for (let year = 1930; year <= 2010; year++) {
      this.years.push(year);
    }
    for (let day = 1; day <= 31; day++) {
      this.days.push(day);
    }
  }

  Login() {
    this.http
      .post('https://localhost:44369/User/login', this.login)
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('userToken', res.data.token);
        } else {
          this.message = res.message;
        }
      });
  }
  Register() {
    this.http.post('', this.register.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
