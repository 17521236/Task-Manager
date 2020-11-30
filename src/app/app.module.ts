import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { LoginComponent } from './components/login/login.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { SignupComponent } from './components/signup/signup.component';

// module
import { SharedModule } from 'src/shared/shared.module';
import { MessageNotificationComponent } from './shared/message-notification/message-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ListDetailComponent,
    TaskDetailComponent,
    LoginComponent,
    SignupComponent,
    MessageNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
