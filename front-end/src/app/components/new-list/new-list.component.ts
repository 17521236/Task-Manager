import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {

  }

  createList(title) {
    this.taskService.createList(title).subscribe(res => {
      console.log(res);
    })
  }
}
