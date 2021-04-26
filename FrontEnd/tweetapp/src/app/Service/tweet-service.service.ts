import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../Model/Comments';
import { Tweet } from '../Model/Tweet';
import { TweetMsg } from '../Model/TweetMsg';
import { AuthServiceServiceService } from './auth-service-service.service';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  constructor(private router: Router,private httpClient: HttpClient,private authService: AuthServiceServiceService) { }


  getAllTweets(): Observable<any[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    return this.httpClient.get<Tweet[]>(environment.baseUrl + "/tweets/all", { headers });

  }

  postNewTweet(tweet:TweetMsg,userIdIn:string): Observable<any> {
    let headers = new HttpHeaders(); 
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    return this.httpClient.post(environment.baseUrl + "/tweets/"+userIdIn+"/add/",tweet, { headers });

  }

  deleteTweet(tweetId:string,userIdIn:string): Observable<any> {
    let headers = new HttpHeaders(); 
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    return this.httpClient.delete(environment.baseUrl + "/tweets/"+userIdIn+"/delete/"+tweetId, { headers });

  }


  postComment(comment:Comments,tweet:Tweet): Observable<any> {
    let headers = new HttpHeaders(); 
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    console.log(headers);
    return this.httpClient.put(environment.baseUrl + "/tweets/"+tweet.userId+"/reply/"+tweet.tweetId,comment, { headers });

  }

  updateoldtweet(updateTweet: TweetMsg, tweetId:string, userId:string): Observable<any> {
    let headers = new HttpHeaders(); 
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    console.log(headers);
    return this.httpClient.put(environment.baseUrl + "/tweets/"+userId+"/update/"+tweetId,updateTweet, { headers });

  }
 
  likeTweet(tweet:Tweet): Observable<any> {
  
    const headers = new HttpHeaders().set('content-type','application.json')
    .set('Acces-control-Allow-Origin','*')
    .set('Authorization', 'BEARER '+this.authService.getToken());
    
   console.log(headers);
    return this.httpClient.put(environment.baseUrl+'/tweets/'+tweet.userId+"/like/"+tweet.tweetId, {headers});
  
  }
  

}
