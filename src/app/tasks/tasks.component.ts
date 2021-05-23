import { Component, OnInit } from '@angular/core';
import { Tasks } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  task:Tasks[] | undefined

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.task=this.taskService.getTasks()

  }

}
