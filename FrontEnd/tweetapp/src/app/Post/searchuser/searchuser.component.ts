import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Model/Users';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  list: Users[];
  filteredUsers: Users[];
  nameSearch: string;
  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.list = data;
      this.filteredUsers=data;
      console.log(data);
  });
  }
  search() {
    this.filteredUsers = this.list.filter(item => item.loginId.toLocaleLowerCase().includes
    (this.nameSearch.toLocaleLowerCase()));
 
  }
}
