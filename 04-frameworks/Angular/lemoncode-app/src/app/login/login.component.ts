import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/UserEntity';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UserEntity = {
    username: '',
    password: '',
  };

  loading = false;
  error = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.error = '';
    this.authService.login(this.user).subscribe((result) => {
      if (result === true) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
    });
  }
}
