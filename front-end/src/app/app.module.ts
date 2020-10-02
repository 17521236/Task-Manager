import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

// http module
import { WebRequestService } from './services/web-request.service';
import { HttpClientModule } from '@angular/common/http';

// component
import { TaskService } from './services/task.service';
import { NewListComponent } from './components/new-list/new-list.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    NewListComponent,
    NewTaskComponent
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
