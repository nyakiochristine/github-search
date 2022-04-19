import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  constructor(private http: HttpClient) { }


  getUser(username: String): Observable<User> {
    let searchRequest = environment.GITHUB_API_URL + username;
    return this.http.get<User>(searchRequest,);

  }

  getRepos(username: string): Observable<Repos[]> {
    let searchRequest = environment.GITHUB_API_URL  + username + '/repos';

    console.log(searchRequest);
    return this.http.get<Repos[]>(searchRequest);
  }



}

