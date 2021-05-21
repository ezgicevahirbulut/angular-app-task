import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  task:Tasks[]
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.task=this.taskService.getTasks()

  }

}
