import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private router: Router) { }
  baseurl = 'http://localhost:3000';
  // angular behaviorsubject navigation bar //https://netbasal.com/angular-2-persist-your-login-status-with-behaviorsubject-45da9ec43243
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken()); 
  //  * if we have token the user is loggedIn
  //  * @returns {boolean}
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  };
  // public getToken(): string {
  //   return localStorage.getItem('token');
  // }
  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting 
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }
/*************************************Authentification**************************************** */
  ADD(data) {
    const url = `${this.baseurl}/users/register`;
    console.log(data);
    return this.http.post(url, data)
  }
  // login
  Login(data) {
    const url = `${this.baseurl}/users/login`;
    console.log(data);
    this.isLoginSubject.next(true); //Login the user then tell all the subscribers about the new status
    return this.http.post(url, data);
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false); //Log out the user then tell all the subscribers about the new status
  }

  isLoggedIn() : Observable<boolean> {     //@returns {Observable<T>}
    return this.isLoginSubject.asObservable();
   }
/*************************************Cree et affecte les articles**************************************** */
  article(data) {
    const url = `${this.baseurl}/articles/newarticle`;
    return this.http.post(url, data);
  }
  Affectarticle(id, articleid) {
    const url = `${this.baseurl}/affect/${id}/${articleid}`;
    return this.http.put(url, {});
  }
  upload(data, id) {
    const url = `${this.baseurl}/image/${id}`;
    return this.http.post(url, data);
  }

/*************************************Affiche et edite les articles**************************************** */
  getarticle() {
    const url = `${this.baseurl}/articles/find`;
    return this.http.get(url);
  }
  deletearticle(id) {
    const url = `${this.baseurl}/articles/delete/${id}`;
    return this.http.delete(url);
  }
  updatearticle(id, data) {
    const url = `${this.baseurl}/articles/update/${id}`;
    return this.http.put(url, data);
  }
}
