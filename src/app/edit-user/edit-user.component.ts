import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  users!: Users;

  constructor(
    private userService:UsersService,
    private route:ActivatedRoute,
    private router:Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get('id')
      this.users = this.userService.getUser(userId)
    })
  }


  onFormSubmit(form: NgForm) {
    const { name, mail } = form.value

    this.userService.updateUsers(this.users.id, {
      name,
      mail: string
    })

    this.notificationService.show('User updated!')
  }

  delete() {
    this.userService.deleteUser(this.users.id)
    this.router.navigate(['../'], { relativeTo: this.route })

    this.notificationService.show('Deleted User')
  }

}
