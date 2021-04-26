import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceServiceService } from './Service/auth-service-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tweetapp';


  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['login']);
  }
  constructor(public authService:AuthServiceServiceService,public router: Router) {  
  }
  loggedIn():boolean {
    if(this.authService.loggedIn){
      return true
    }
    else{
      return false;
    }
  }

}
