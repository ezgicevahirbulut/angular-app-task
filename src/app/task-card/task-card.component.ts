import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../shared/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input()
  task!: Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
