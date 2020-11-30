import { Component } from '@angular/core';
import { MessageNotificationService } from 'src/shared/services/message-notification.service';

@Component({
  selector: 'app-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['./message-notification.component.scss']
})
export class MessageNotificationComponent{

  constructor(public messageService: MessageNotificationService) { }
}
