import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit,OnDestroy {

  task: Observable<{tasks:Tasks[]}>;

  constructor(private taskService:TaskService,
      private task:Tasks<{task:{tasks:Tasks[]}}>
    ) { }

  ngOnInit(): void {
    this.tasks=this.task.select('tasks')
    this.task=this.taskService.getTasks()

  }

}
