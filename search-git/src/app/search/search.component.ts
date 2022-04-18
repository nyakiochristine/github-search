import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user!:User
  repos: any

  constructor(public githubService:GithubService) {


    
  }
  searchUser(username:string){
    //this.githubService['getUser'].then ((success: any)=>{
      //this.user= this.githubService.username
    //},
    //(error: any)=>{
      //console.log(error)
    //});

    //this.repos(this.repos).then ((success: any)=>{
      //this.repos= this.githubService.repos
    //},
    //(error: any)=>{
      //console.log(error)
    //}
    

  }
 

  ngOnInit(): void {
    this.searchUser('nyakiochristine');
  }

}

