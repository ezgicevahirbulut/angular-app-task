import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:'users',component:UsersComponent, data:{tab:1}},
  {path:'users/add',component:AddUserComponent},
  {path:'users/manage',component:UserManageComponent,children:[
    {path:':id',component:EditUserComponent}
  ]},
  {path:'tasks',component:TasksComponent,data:{tab:2}},
  {path:'tasks/add',component:AddTaskComponent},
  {path:'task/:id',component:TaskEditComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
