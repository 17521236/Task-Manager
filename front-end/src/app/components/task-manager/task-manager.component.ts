import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  lists: List[]=[];
  tasks: Task[]=[];
  listId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      this.getLists();
      this.getTasks();
    })
  }

  getLists() {
    this.taskService.getLists().subscribe((lists: List[]) => this.lists = lists);
  }

  getTasks() {
    if (this.listId) {
      this.taskService.getTasksByListId(this.listId).subscribe((tasks: Task[]) => this.tasks = tasks);
    }
  }

  createTask() {
    this.router.navigate(['/lists', this.listId, 'create-task'])
  }

  onDone(task: Task) {
    this.taskService.completedTask(task).subscribe(() => {
      task.completed = !task.completed
    });
  }

}


