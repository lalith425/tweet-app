import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comments } from 'src/app/Model/Comments';
import { Tweet } from 'src/app/Model/Tweet';
import { TweetServiceService } from 'src/app/Service/tweet-service.service';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup
  commentPost:Comments= {comment: "",userId:""};
  @Input() tweet: Tweet;
  constructor(public userMenuComponent:UserMenuComponent,private router: Router,private formBuild: FormBuilder,public tweetService: TweetServiceService) { }

  ngOnInit(): void {
    this.commentForm = this.formBuild.group({
      comment: ['', [
        Validators.required
      ]],
    })
  }
  get comment() {
    return this.commentForm.get('comment');
  }

  cancel(){
    this.userMenuComponent.resetTweetId(); 
  }

  post(comments){
       this.commentPost.comment= comments;
    this.commentPost.userId= this.tweet.userId;
    this.tweetService.postComment(this.commentPost,this.tweet).subscribe((data)=>{
      alert("Comment Added Suucessfully");
      this.userMenuComponent.resetTweetId();
      this.router.navigate(['user-menu'])
    });

 
  }

}
