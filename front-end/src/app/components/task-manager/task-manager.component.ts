import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  lists: List[] = [];
  tasks: Task[] = [];
  listId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;
      this.getLists();
      this.getTasks();
    });
  }

  getLists(): void {
    this.taskService.getLists().subscribe((lists: List[]) => this.lists = lists);
  }

  getTasks(): void {
    if (this.listId) {
      this.taskService.getTasksByListId(this.listId).subscribe((tasks: Task[]) => this.tasks = tasks);
    }
  }

  onDone(task: Task): void {
    this.taskService.completedTask(task).subscribe(() => {
      task.completed = !task.completed;
    });
  }


  deleteList(): void {
    this.taskService.deleteList(this.listId).subscribe((res: any) => {
      this.router.navigate(['lists']);
    }, err => alert(err));
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(this.listId, task._id).subscribe((res: any) => {
      if (res.result === '1') {
        this.tasks = this.tasks.filter(x => x._id !== task._id);
      }
    }, err => alert(err));
  }
}


