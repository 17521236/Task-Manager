import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageNotificationService } from 'src/shared/services/message-notification.service';

export abstract class AppComponentBase {
  message: MessageNotificationService;
  router: Router;
  SERVER_URL:string;
  route:ActivatedRoute;

  constructor(injector: Injector) {
    this.message = injector.get(MessageNotificationService);
    this.router = injector.get(Router);
    this.route=injector.get(ActivatedRoute);
    this.SERVER_URL=environment.SERVER_URL;
  }

}
