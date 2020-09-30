import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {

  }

  createList() {
    this.taskService.createList('this is new List').subscribe(res => {
      console.log(res);
    })
  }
}
