import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'create-list', component: NewListComponent },
  { path: 'lists', component: TaskManagerComponent },
  { path: 'lists/:listId', component: TaskManagerComponent },
  { path: 'lists/:listId/create-task', component: NewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
