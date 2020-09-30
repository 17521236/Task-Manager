import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((listId) => {
      console.log(listId)
    })
  }


}
