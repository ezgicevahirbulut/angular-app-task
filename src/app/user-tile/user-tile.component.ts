import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../shared/users.model';


@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {

  @Input() user:Users
  
  
  tileIconSrc: string

  faviconError: boolean
  
  
  constructor() { }

  ngOnInit(): void {

    this.tileIconSrc = this.user.url.origin + '/favicon.ico'
  }

}
