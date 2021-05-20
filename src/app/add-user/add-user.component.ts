import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private usersService:UsersService,
    private router:Router,
    private notificationService:NotificationService) { }

  ngOnInit(): void {
     
  }

  onFormSubmit(form:NgForm){
    const {name,email }= form.value
    const users = new Users(name,email)

    this.usersService.addUsers(users)
    this.router.navigateByUrl("/users")
    this.notificationService.show('Created user')
  }

}
