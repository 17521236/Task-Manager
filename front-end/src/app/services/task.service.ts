import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('lists')
  }

  createList(title: string) {
    return this.webReqService.post('lists', { title })
  }

  // task
  getTasksByListId(_listId: string) {
    return this.webReqService.get(`lists/${_listId}/tasks`);
  }

  createTask(title: string, _listId: string) {
    let newTask = new Task(title, _listId);
    return this.webReqService.post(`lists/${_listId}/tasks`, newTask);
  }

  completedTask(task: Task) {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed })
  }
}
