import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/shared/services/web-request.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebRequestService) { }
  createUser(user: User): Observable<any> {
    return this.webReqService.post(`users`, user);
  }
}
