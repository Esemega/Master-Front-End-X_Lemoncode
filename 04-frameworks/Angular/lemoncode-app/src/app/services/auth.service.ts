import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserEntity } from '../model/UserEntity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  _isLogged = false; //Esta variable se eliminará cuando se acceda al localstorage

  login(user: UserEntity): Observable<boolean> {
    if (
      user.username === 'master8@lemoncode.net' &&
      user.password === '12345678'
    ) {
      this._isLogged = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): Observable<boolean> {
    this._isLogged = false;
    return of(true);
  }

  isLogged(): Observable<boolean> {
    return of(this._isLogged);
  }
  getUsername(): string {
    return 'Sonia Garcia';
  }
}
