import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { List } from '../../models/list.model'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) {

  }

  ngOnInit(): void {

  }

  createList(title) {
    this.taskService.createList(title).subscribe((newList: List) => {
      this.router.navigate(['/lists', newList._id])
    })
  }
}
