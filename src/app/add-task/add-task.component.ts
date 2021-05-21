import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  showValidationErrors: boolean = false; 

  constructor(
    private taskService: TaskService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm) {
    console.log(form)

    if (form.invalid) return this.showValidationErrors = true
    
    const task = new Tasks(form.value.title, form.value.content)

    this.taskService.addTask(task)
    this.router.navigateByUrl("/tasks")
    this.notificationService.show('Created Task')
  }
}
