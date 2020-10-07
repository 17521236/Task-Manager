import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// http module
import { WebRequestService } from './services/web-request.service';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { LoginComponent } from './components/login/login.component';
import { TaskService } from './services/task.service';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ListDetailComponent,
    TaskDetailComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WebRequestService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
