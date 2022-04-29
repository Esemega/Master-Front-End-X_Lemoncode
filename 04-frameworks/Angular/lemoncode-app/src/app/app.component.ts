import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemoncode-app';

  constructor(public auth: AuthService, router: Router) {
    if (this.isLogged()) {
      router.navigate(['/home']);
    }
  }

  isLogged(): Observable<boolean> {
    return this.auth.isLogged();
  }
}
