import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { AppComponentBase } from 'src/shared/common/AppComponentBase/AppComponentBase.component';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent extends AppComponentBase implements OnInit {

  pageState: string;
  list: List = new List();

  constructor(private injector:Injector,private taskService: TaskService) {
    super(injector);
    this.route.params.subscribe((params: Params) => {
      this.list._id = params.listId;
      this.list._userId = localStorage.getItem('userId');
    });
    this.route.data.subscribe(data => this.pageState = data.pageState);
  }

  ngOnInit(): void {
    if (this.pageState === 'edit') {
      this.taskService.getListById(this.list._id).subscribe((res: List) => {this.list = res;console.log(this.list)});
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
    this.taskService.createList(this.list).subscribe((newList: List) => {
      this.router.navigate(['/lists', newList._id,'tasks']);
    });
  }

  updateList(): void {
    this.taskService.updateList(this.list).subscribe((res: any) => {
      this.router.navigate(['/lists', res._id,'tasks']);
    }, err => console.log(err));
  }
}
