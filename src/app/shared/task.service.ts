import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Tasks } from './task.model';



@Injectable({
  providedIn: 'root'
})

export class TaskService implements OnDestroy {

  tasks:Tasks[]=[]

  storageListenSub: Subscription


  constructor() { 
    this.loadState()
 
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
        if (event.key === 'task') this.loadState()
      })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getTasks(){
    return this.tasks
  }

  getTask(id:string){
    return this.tasks.find(n=> n.id === id)
  }

  addTask(tasks:Task){
    this.tasks.push()

    this.saveState()
  }

  updateTask(id:string,updatedFields:Partial<Task>){
    const task=this.getTask(id)
    Object.assign(task,updatedFields)
  }

  deleteTask(id:string){
    const taskIndex = this.tasks.findIndex(n => n.id === id)
    if(taskIndex == -1) return
    
    this.tasks.splice(taskIndex,1)

    this.saveState()
  }

  saveState() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  loadState() {
    try {
      const tasksInStorage = JSON.parse(localStorage.getItem('task'))
      
      this.tasks.length = 0 
      this.tasks.push(...tasksInStorage)

    } catch (e) {
      console.log('There was an error retrieving the tasks from localStorage')
      console.log(e)
    }
  }

}
