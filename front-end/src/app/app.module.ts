import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

// http module
import { WebRequestService } from './services/web-request.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { NewListComponent } from './components/new-list/new-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
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
