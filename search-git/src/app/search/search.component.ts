import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { GithubService } from '../github.service';
import { ProfileService } from '../profile.service';
import { error } from 'console';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user!:User
  repos:any

  constructor(public userService:GithubService){}
  searchUser(username:string){
    this.userService.getProfile(username).then((success: any)=>{
     this.user = this.userService.user;
    },
    (error: any)=>{
      console.log(error)
    });
    this.userService.getRepos(username).then((success: any)=>{
     this.repos = this.userService.repos;
    },
    (error: any)=>{
      console.log(error)
    });
  }

 ngOnInit(): void {
   this.searchUser('amani-joseph');
 }

}

  
  