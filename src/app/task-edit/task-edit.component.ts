import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Tasks } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  task:Tasks
  constructor(
    private route:ActivatedRoute,
    private taskService:TaskService,
    private router:Router,
    private notificationService: NotificationService


  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      this.task = this.taskService.getTask(idParam)
  }
}
  
  onFormSubmit(form: NgForm) {
    this.taskService.updateNote(this.task.id, form.value)
    this.router.navigateByUrl("/tasks")

    this.notificationService.show('Task updated!')
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id)
    this.router.navigateByUrl("/tasks")

    this.notificationService.show('Note task')
  }


}
