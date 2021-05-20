import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  user:Users[]

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.user = this.userService.getUsers()

  }

}
