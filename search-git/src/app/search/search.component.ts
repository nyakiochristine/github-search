import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';


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
    this.userService['getProfile'](username).then((_success: any)=>{
     this.user = this.userService.user;
    },
    (error: any)=>{
      console.log(error)
    });
    this.userService['getRepos'](username).then((_success: any)=>{
     this.repos = this.userService['repos'];
    },
    (error: any)=>{
      console.log(error)
    });
  }

 ngOnInit(): void {
   this.searchUser('nyakiochristine');
 }

}

  
  