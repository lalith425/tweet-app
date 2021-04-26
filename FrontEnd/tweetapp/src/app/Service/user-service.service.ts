import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../Model/AuthenticationRequest';
import { Users } from '../Model/Users';
import { AuthServiceServiceService } from './auth-service-service.service';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router: Router, private signService: SignService,private httpClient: HttpClient,private authService: AuthServiceServiceService) { }

  addUser(user: Users) {
    console.log(user);
    this.signService.addUser(user).subscribe(data => {
      if (data) {
        this.router.navigate(['login']);
      }
      else {
        alert('Already exist');
        this.router.navigate(['signup']);
      } 
    });
  }
  updatePassword(user: string, password: string): Observable<any>{
    let  authenticationReq={} as AuthenticationRequest;
    authenticationReq.loginId = user;
    authenticationReq.password= password;
    return this.httpClient.put(environment.baseUrl + "/tweetapp/user/forgetpassword",authenticationReq);

  }

  forgetPassword(user) {
    this.updatePassword(user.username, user.password).subscribe((data)=>{
      alert("Password Updated");
    },
    (error)=>{
      alert("Invalid UserName");
    })
    
   
  }

  getAllUsers(): Observable<any[]> {

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'BEARER ' + this.authService.getToken());
    return this.httpClient.get<Users[]>(environment.baseUrl + "/tweetapp/user/all", { headers });

  }


}
