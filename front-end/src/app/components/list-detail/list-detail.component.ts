import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  pageState: string;
  list: List = new List();
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => this.list._id = params.listId);
    this.route.data.subscribe(data => this.pageState = data.pageState);
  }

  ngOnInit(): void {
    if (this.pageState === 'edit') {
      this.taskService.getListById(this.list._id).subscribe((res: List) => this.list = res);
    }
  }

  save(form: NgForm): void {
    switch (this.pageState) {
      case 'add': {
        this.createList();
        break;
      }
      case 'edit': {
        this.updateList();
        break;
      }
      default: {
      }
    }
  }

  createList(): void {
    this.taskService.createList(this.list.title).subscribe((newList: List) => {
      this.router.navigate(['/lists', newList._id]);
    });
  }

  updateList(): void {
    this.taskService.updateList(this.list).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/lists', res._id]);
    }, err => console.log(err));
  }
}
