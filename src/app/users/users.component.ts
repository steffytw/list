import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[{id:1,name:'reema'},
  {id:2,name:'seema'},
  {id:3,name:'beema'},
  {id:4,name:'feema'}]

  constructor() { }

  ngOnInit() {
  }

}
