import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser: FormGroup;
  token;

  constructor(private service: ServiceService, private router: Router) {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }

  ngOnInit() {
    this.loginuser = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  log() {
    this.service.Login(this.loginuser.value).subscribe(res => {
      console.log(res);
      this.token = res;
      localStorage.setItem('token', this.token.secret_token);
      this.router.navigateByUrl('/newarticle');

    });
  }
  reg() {
    this.router.navigateByUrl('/register');
  }

}
