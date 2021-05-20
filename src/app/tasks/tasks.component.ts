import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Tasks[]
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.tasks=this.taskService.getTasks()

  }

}
