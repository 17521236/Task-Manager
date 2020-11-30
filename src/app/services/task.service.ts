import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/shared/services/web-request.service';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private webReqService: WebRequestService) { }

  getListsByUserId(): Observable<any> {
    return this.webReqService.get(`lists/user/${localStorage.getItem('userId')}`);
  }

  getListById(listId: string): Observable<any> {
    return this.webReqService.get(`lists/${listId}`);
  }

  createList(list: List): Observable<any> {
    return this.webReqService.post('lists', list);
  }

  updateList(list: List): Observable<any> {
    return this.webReqService.put(`lists/${list._id}`, list);
  }

  deleteList(listId: string): Observable<any> {
    return this.webReqService.delete(`lists/${listId}`);
  }

  // task
  getTasksByListId(listId: string): Observable<any> {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  getTaskById(task: Task): Observable<any> {
    return this.webReqService.get(`lists/${task._listId}/tasks/${task._id}`);
  }

  createTask(task: Task): Observable<any> {
    return this.webReqService.post(`lists/${task._listId}/tasks`, task);
  }

  updateTask(task: Task): Observable<any> {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, task);
  }

  completedTask(task: Task): Observable<any> {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed });
  }

  deleteTask(listId: string, id: string): Observable<any> {
    return this.webReqService.delete(`lists/${listId}/tasks/${id}`);
  }
}
