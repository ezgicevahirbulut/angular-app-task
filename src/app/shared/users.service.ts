import { Injectable, OnDestroy } from '@angular/core';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnDestroy{

  users:Users[]=[]


  constructor() {

    
   
   }

   ngOnDestroy() {
  }

  getUsers() {
    return this.users
  }

  getUser(id: string) {
    return this.users.find(b => b.id === id)
  }

  addUsers(user: Users) {
    this.users.push(user)

 
  }

  updateUsers(id: string, updatedFields: Partial<Users>) {
    const users = this.getUser(id)
    Object.assign(users, updatedFields)

  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex(b => b.id === id)
    if (userIndex == -1) return
    this.users.splice(userIndex, 1)
  
  }


  
}
