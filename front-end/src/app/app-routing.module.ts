import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { LoginGuard } from './guards/login.guard';
import { Route } from '@angular/compiler/src/core';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // list
  { path: 'lists', component: TaskManagerComponent, canActivate: [LoginGuard] },
  { path: 'lists/add', component: ListDetailComponent, canActivate: [LoginGuard], data: { pageState: 'add' } },
  { path: 'lists/:listId/edit', component: ListDetailComponent, canActivate: [LoginGuard], data: { pageState: 'edit' } },
  // task
  { path: 'lists/:listId', component: TaskManagerComponent, canActivate: [LoginGuard] },
  { path: 'lists/:listId/tasks/add', component: TaskDetailComponent, canActivate: [LoginGuard], data: { pageState: 'add' } },
  { path: 'lists/:listId/tasks/:id/edit', component: TaskDetailComponent, canActivate: [LoginGuard], data: { pageState: 'edit' } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
