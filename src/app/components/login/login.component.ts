import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { AppComponentBase } from 'src/shared/common/AppComponentBase/AppComponentBase.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase implements OnInit {

  constructor(private injector:Injector,private loginService: LoginService) {
    super(injector);
  }

  ngOnInit(): void {
  }

  checkLogin(loginForm: NgForm): void {
    if(loginForm.invalid){
      loginForm.form.markAllAsTouched();
      return;
    }
    const user: User = loginForm.value;
    this.loginService.checkUser(user).subscribe((res: any) => {
      if (res.result === '1') {
        localStorage.setItem('userId', res.user._id);
        localStorage.setItem('userName', res.user.name);
        this.message.success('Login successfully');
        this.router.navigate(['lists']);
      } else {
        this.message.danger(res.message);
      }
    });
  }
}
