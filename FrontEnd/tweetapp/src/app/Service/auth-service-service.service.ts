import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../Model/AuthenticationRequest';
import { Users } from '../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceServiceService {

 
  loggedInUserId: string;
  validCredentials: boolean = true;
  accessToken: string;
  redirectUrl = '/';
  name: string;
  loggedIn: boolean = false;
  private token: string;
  error: string = "Login Failed";

 

  authenticateSpring(user: string, password: string):Observable<any>{

    let  authenticationReq={} as AuthenticationRequest;
    authenticationReq.loginId = user;
    authenticationReq.password = password;
    let headers = new HttpHeaders();
    //headers = headers.set('Authorization', 'Basic ' + authenticationReq)
    return this._httpClient.post<Users>(environment.baseUrl + "/authenticate", authenticationReq)

  }
  
  public setLoggedInUserId(loggedInUserId: string){
    this.loggedInUserId = loggedInUserId;
      }
      getLoggedInUserId(){
    return this.loggedInUserId;
      }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  constructor( public router: Router, private _httpClient: HttpClient) { }


  authenticateUser(user) {

    this.authenticateSpring(user.username, user.password).subscribe(
      (data)=>{
        console.log(data);
        this.validCredentials = true;
        this.loggedIn = true;
        this.setLoggedInUserId(data.userId);
        this.setToken(data.jwt);

        this.router.navigate(['user-menu']);
      },
      (error)=>{
        this.validCredentials = false;
      }
    )

  }

  logout(){
    this.loggedIn=false;
    this.setToken(null);
    this.setLoggedInUserId(null);
    this.router.navigate(['login']);

  }
}
