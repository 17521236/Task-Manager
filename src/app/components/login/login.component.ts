import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  error = '';

  ngOnInit(): void {
  }

  checkLogin(loginForm: NgForm): void {
    const user: User = loginForm.value;

    this.loginService.checkUser(user).subscribe((res: any) => {
      if (res.result === '1') {
        localStorage.setItem('userId', res.user._id);
        localStorage.setItem('userName', res.user.name);

        this.router.navigate(['lists']);
      } else {
        this.error = res.message;
      }
    });
  }
}
