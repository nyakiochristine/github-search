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
  [x: string]: any;
   
 public username:string = "nyakiochristine";
  user!: User;
  repo!:Repos;

  constructor(public http:HttpClient) {}


  getUser(_username: string){
    const url =`https://api.github.com/users/${this.username}`;
    return this.http.get<any>(url);
  
  }
}
