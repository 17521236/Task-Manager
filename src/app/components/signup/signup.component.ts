import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AppComponentBase } from 'src/shared/common/AppComponentBase/AppComponentBase.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends AppComponentBase {
  errors = [];
  user: User = new User();
  usernamePattern = '/^[a-z]{6,32}$/i';
  passwordPattern = '/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/';

  constructor(private injector:Injector,private userService: UserService) {
    super(injector);
  }

  save(form: NgForm):void {
    if(form.invalid){
      form.form.markAllAsTouched();
      return;
    }
    this.userService.createUser(this.user).subscribe((res:any) => {
      if (res.result === '1')
        {
          this.message.success('Register successfully. Login now');
          this.router.navigate(['login']);
        }
      else {
        this.message.danger(res.message);
      }
    }, err => {
      this.message.danger('Register failed. Something wrong');
    });
  }

}
