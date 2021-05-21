import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotificationComponent } from './notification/notification.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserManageComponent } from './user-manage/user-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    UsersComponent,
    TasksComponent,
    NotificationComponent,
    AddUserComponent,
    AddTaskComponent,
    TaskEditComponent,
    UserTileComponent,
    TaskCardComponent,
    EditUserComponent,
    UserManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
