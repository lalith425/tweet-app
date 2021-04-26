import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(private _httpClient: HttpClient) { }

  addUser(userLists: Users): Observable<Users> {
    console.log(userLists);
    return this._httpClient.post<Users>(environment.baseUrl + "/tweetapp/signup", userLists)
  }
}
