import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  // token;
  constructor( public service: ServiceService, private router: Router) {
    this.isLoggedIn = service.isLoggedIn();
   }

  ngOnInit() {

    // this.token = this.service.getToken()
  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/login');
  }

}
