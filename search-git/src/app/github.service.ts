import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repos: any;
  getRepo(username: string) {
    throw new Error('Method not implemented.');
  }
 public username:string = "nyakiochristine";
  getProfile: any;
  user!: User;
  getRepos:any;

  constructor(public http:HttpClient) {}


  getUser(_username: string){
    const url =`https://api.github.com/users/${this.username}`;
    return this.http.get<any>(url);
  
  }
}
