import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Tasks } from './task.model';



@Injectable({
  providedIn: 'root'
})

export class TaskService implements OnDestroy {

  tasks:Tasks[]=[]



  constructor() { 
  
  }

  ngOnDestroy() {
  }

  getTasks(){
    return this.tasks
  }

  getTask(id:string){
    return this.tasks.find(n=> n.id === id)
  }

  addTask(tasks:Task){
    this.tasks.push()

  }

  updateTask(id:string,updatedFields:Partial<Task>){
    const task=this.getTask(id)
    Object.assign(task,updatedFields)
  }

  deleteTask(id:string){
    const taskIndex = this.tasks.findIndex(n => n.id === id)
    if(taskIndex == -1) return
    
    this.tasks.splice(taskIndex,1)

    
  }

}
