import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  username: string | null = null;

  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.isLogged()) {
      this.username = this.authService.getUsername();
    }
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout().subscribe((x) => this.router.navigate(['/home']));
  }
}
