import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { LoginGuard } from './guards/login.guard';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'lists/:listId/tasks/edit/:id', component: TaskDetailComponent, canActivate: [LoginGuard], data: { pageState: 'edit' } },
  { path: 'lists/:listId/tasks/add', component: TaskDetailComponent, canActivate: [LoginGuard], data: { pageState: 'add' } },
  { path: 'lists/:listId/tasks', component: TaskManagerComponent, canActivate: [LoginGuard] },

  { path: 'lists/edit/:listId', component: ListDetailComponent, canActivate: [LoginGuard], data: { pageState: 'edit' } },
  { path: 'lists/add', component: ListDetailComponent, canActivate: [LoginGuard], data: { pageState: 'add' } },
  { path: 'lists', component: TaskManagerComponent, canActivate: [LoginGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
