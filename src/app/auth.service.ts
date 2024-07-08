import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  currentUser = new BehaviorSubject(null);

  register(formData: any): Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/users', formData);
  }
  login(formData: any): Observable<any> {
    return this._HttpClient.post(
      'https://fakestoreapi.com/auth/login',
      formData
    );
  }
  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
    console.log(this.currentUser);
  }
}
