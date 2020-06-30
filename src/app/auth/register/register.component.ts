import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuser: FormGroup;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.newuser = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  reg() {
    this.service.ADD(this.newuser.value).subscribe(res => {
      console.log(res);

    });
    this.router.navigateByUrl('/login');
  };

}
