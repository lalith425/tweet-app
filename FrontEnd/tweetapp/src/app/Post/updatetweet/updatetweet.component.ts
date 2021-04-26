import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMenuComponent } from 'src/app/Account/user-menu/user-menu.component';
import { Tweet } from 'src/app/Model/Tweet';
import { TweetMsg } from 'src/app/Model/TweetMsg';
import { AuthServiceServiceService } from 'src/app/Service/auth-service-service.service';
import { TweetServiceService } from 'src/app/Service/tweet-service.service';

@Component({
  selector: 'app-updatetweet',
  templateUrl: './updatetweet.component.html',
  styleUrls: ['./updatetweet.component.css']
})
export class UpdatetweetComponent implements OnInit {
  updateForm: FormGroup
  @Input() tweetToUpdate: Tweet;
 
  constructor(public authService:AuthServiceServiceService,private fb: FormBuilder,public userMenuComponent:UserMenuComponent,private router: Router,private formBuild: FormBuilder,public tweetService: TweetServiceService) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
      updatetweet:[this.tweetToUpdate.tweetPost,[Validators.required,Validators.maxLength(200)]]
    })

  }
 
  

  updateoldtweet(){
   let  tweetMsgObj ={} as TweetMsg
   tweetMsgObj.tweetMsg=this.updateForm.get("updatetweet").value;
   this.tweetService.updateoldtweet(tweetMsgObj,this.tweetToUpdate.tweetId,this.authService.getLoggedInUserId()).subscribe((data)=>{
     alert("Tweet Updated");
     this.userMenuComponent.resetTweetId();
   })

  }

  cancel(){

  }
}
