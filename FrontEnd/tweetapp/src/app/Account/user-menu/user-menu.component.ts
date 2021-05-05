import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/Model/Tweet';
import { Users } from 'src/app/Model/Users';
import { AuthServiceServiceService } from 'src/app/Service/auth-service-service.service';
import { TweetServiceService } from 'src/app/Service/tweet-service.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  nameSearch: string;
  list: Users[];
  tweetList: Tweet[];
  filteredtweetList: Tweet[];
 commentIsClicked: boolean = false;
 editIsClicked: boolean = false;
 checkTweetId: string;
 userId: string

 resetTweetId(){
   this.checkTweetId = "";
   this.commentIsClicked=false;
   this.editIsClicked=false;
   this.ngOnInit();
 }

  constructor(public router:Router,public authService:AuthServiceServiceService,private userService: UserServiceService,public tweetService: TweetServiceService) { }

  ngOnInit() {
    this.tweetService.getAllTweets().subscribe((data)=>{
      console.log(data);
      this.tweetList = data;
      this.filteredtweetList = this.tweetList;
    });
    
  }


  search() {
    this.filteredtweetList = this.tweetList.filter(item => item.userId.toLocaleLowerCase().includes(this.nameSearch.toLocaleLowerCase()));
    // this.userService.getSubject().next(this.filteredName);
  }

  like(tweet){
    console.log(tweet)
    this.tweetService.likeTweet(tweet).subscribe((data)=>{
      alert("Liked Suucessfully");
    });
  }
  comment(tweet){
    this.resetTweetId();
    this.checkTweetId = tweet.tweetId
    this.commentIsClicked = true 
  }
  edittweet(tweetId){
    this.resetTweetId();
    this.checkTweetId = tweetId
    this.editIsClicked = true 
  }
  deletetweet(tweetId){
     
       this.tweetService.deleteTweet(tweetId,this.authService.getLoggedInUserId()).subscribe((data)=>{
         alert("Deleted Successfully");
         this.ngOnInit();
       })
  }
}
