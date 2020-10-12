import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  pageState: string;
  task: Task = new Task();

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.task._listId = params.listId;
      this.task._id = params.id;
    });
    this.route.data.subscribe(data => this.pageState = data.pageState);
  }

  ngOnInit(): void {
    if (this.pageState === 'edit') {
      this.taskService.getTaskById(this.task).subscribe(res => this.task = res);
    }
  }

  save(form: NgForm): void {
    switch (this.pageState) {
      case 'add': {
        this.createTask();
        break;
      }
      case 'edit': {
        this.updateTask();
        break;
      }
      default: {
      }
    }
  }

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(res => {
      this.router.navigate(['lists', this.task._listId]);
    });
  }

  updateTask(): void {
    this.taskService.updateTask(this.task).subscribe(res => {
      this.router.navigate(['lists', this.task._listId]);
    });
  }
}
