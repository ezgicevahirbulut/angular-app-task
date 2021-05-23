import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: Users[] = [];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.users = this.userService.getUsers()

  }


}
