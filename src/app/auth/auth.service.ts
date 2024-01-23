import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userdata = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.setUserData();
    }
  }

  setUserData(): void {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userdata.next(decodedToken);
    console.log(decodedToken);
  }
  register(userdata: object): Observable<any> {
    return this._HttpClient.post(
      'http://warcammp.ddns.net:29548/sign-up',
      userdata
    );
  }

  login(userdata: object): Observable<any> {
    return this._HttpClient.post(
      'http://warcammp.ddns.net:29548/login',
      userdata
    );
  }

  logOut(): void {
    localStorage.removeItem('userToken');
    this.userdata.next(null);
    this._Router.navigate(['/login']);
  }
}
