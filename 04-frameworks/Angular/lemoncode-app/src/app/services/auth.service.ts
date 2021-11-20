import { Injectable } from '@angular/core';
import { UserEntity, UserSession } from '../model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const getToken = (user: UserEntity): string => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hc3RlcjhAbGVtb25jb2RlLm5ldCIsInBhc3N3b3JkIjoiMTIzNDU2NzgifQ.-k6L5ATX3NeF2bwIIQCldqWo63x7ty2dMe3c4O8-rxs';
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSession: UserSession;

  constructor() {
    this.userSession = { username: '', token: '' };
  }

  login(user: UserEntity): Observable<boolean> {
    if (
      user.username === 'master8@lemoncode.net' &&
      user.password === '12345678'
    ) {
      this.userSession.username = user.username;
      this.userSession.token = getToken(user);
      localStorage.setItem('username', this.userSession.username);
      localStorage.setItem('token', this.userSession.token);
      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }
  }

  logout(): Observable<boolean> {
    this.userSession = { username: '', token: '' };
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    return of(true);
  }

  isLogged(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      return of(true);
    } else {
      return of(false);
    }
  }
  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
