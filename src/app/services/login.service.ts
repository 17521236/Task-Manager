import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/shared/services/web-request.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webReqService: WebRequestService) { }

  checkUser(user: User): Observable<any> {
    return this.webReqService.post('auth', user);
  }

  getCurrentUserName(): string {
    return localStorage.getItem('userName');
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
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }
}
