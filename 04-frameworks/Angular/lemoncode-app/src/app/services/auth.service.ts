import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: { username: string; password: string }): boolean {
    return (
      user.username === 'master8@lemoncode.net' && user.password === '12345678'
    );
  }
  // Validación del formulario????

  // Este servicio debe tener los siguientes métodos:
  // logout(): void {}
  // isLogged(): boolean {}
  // getUsername(): string {}
}
