import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors = [];
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  save(form: NgForm) {
    this.userService.createUser(this.user).subscribe((res:any) => {
      if (!res.errors)
        this.router.navigate(['login']);
      else {
        console.log(res.errors);
      }
    }, err => {
      console.log(err);
    })
  }

}
