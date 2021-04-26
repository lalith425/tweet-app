import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/Model/Tweet';
import { TweetMsg } from 'src/app/Model/TweetMsg';
import { AuthServiceServiceService } from 'src/app/Service/auth-service-service.service';
import { TweetServiceService } from 'src/app/Service/tweet-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router,public authService: AuthServiceServiceService,public tweetService:TweetServiceService) { }

  ngOnInit(): void {
  }

cancel(){
  this.router.navigate(['user-menu']);
}
  posttweet(tweet){
    let newTweet ={} as TweetMsg;
    let userIdIn :string;
    userIdIn = this.authService.getLoggedInUserId();

      newTweet.tweetMsg= tweet;
    this.tweetService.postNewTweet(newTweet,userIdIn).subscribe((data)=>{
      alert("new Tweet Posted");
      this.router.navigate(['user-menu']);
    })


}


}
