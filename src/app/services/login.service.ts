import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webReqService: WebRequestService) { }

  checkUser(user: User): Observable<any> {
    return this.webReqService.post('auth', user);
  }

  getCurrentUserName(): string {
    return localStorage.getItem('email');
  }

  getCurrentUserId(): string {
    return localStorage.getItem('userId');
  }

  isLoggedIn(): boolean {
    if (this.getCurrentUserId()) {
      return true;
    }
    return false;
  }

  logOut(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
  }
}
