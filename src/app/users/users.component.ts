import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users:Bookmark[]

  constructor(private userService:UsersComponent) { }

  ngOnInit(): void {

    this.users = this.userService.getUsers()

  }


}
