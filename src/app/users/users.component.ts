import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy {



  user: Observable<{users:Users[]}>;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.users=this.users.select('users')

    this.user = this.userService.getUsers()

  }


}
