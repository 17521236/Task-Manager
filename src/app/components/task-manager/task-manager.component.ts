import { Component, Injector, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { LoginService } from 'src/app/services/login.service';
import { TaskService } from 'src/app/services/task.service';
import { AppComponentBase } from 'src/shared/common/AppComponentBase/AppComponentBase.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent extends AppComponentBase implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];
  listId: string;

  constructor(private injector:Injector, private taskService: TaskService, private loginService: LoginService) {
    super(injector)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;
      this.getLists();
      this.getTasks();
    });
  }

  getLists(): void {
    this.taskService.getListsByUserId().subscribe((lists: List[]) => this.lists = lists);
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
        this.getTasks();
      }
    }, err => alert(err));
  }

  logOut(): void {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

  getCurrentUserName() {
    let userName: string = this.loginService.getCurrentUserName();
    return userName;
  }
}


