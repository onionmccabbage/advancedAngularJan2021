import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../typicode.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId:number = 1
  users
  constructor( private typicode:TypicodeService ) { }

  ngOnInit(): void {
  }
  // method to return ALL users (via our service)
  getData(){
    this.typicode.getUsers()
      .subscribe( (response)=>{
        console.log(response)
        this.users = response
      }  ) 
  }

}
