import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnDestroy{

  users:Users[]=[]

  storageListenSub: Subscription

  constructor() {

    this.loadState()

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: StorageEvent) => {
        if (event.key === 'users') this.loadState()
      })
   }

   ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getUsers() {
    return this.users
  }

  getUser(id: string) {
    return this.users.find(b => b.id === id)
  }

  addUsers(user: Users) {
    this.users.push(this.user)

    this.saveState()
  }

  updateUsers(id: string, updatedFields: Partial<Users>) {
    const users = this.getUser(id)
    Object.assign(users, updatedFields)

    this.saveState()
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex(b => b.id === id)
    if (userIndex == -1) return
    this.users.splice(userIndex, 1)
    this.saveState()
  }

  saveState() {
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  loadState() {
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem('users'), (key, value) => {
        if (key == 'mail') return new URL(value)
        return value
      })

      this.users.length = 0 // clear the bookmarks array (while keeping the reference)
      this.users.push(...bookmarksInStorage)
    } catch (e) {
      console.log('There was an error retrieving the bookmarks from localStorage')
      console.log(e)
    }
  }
  
}
