import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
 public username:string = "nyakiochristine";

  constructor(public http:HttpClient) {}


  getUser(_username: string){
    const url =`https://api.github.com/users/${this.username}`;
    return this.http.get<any>(url);
  
  }
}
