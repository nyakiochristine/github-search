import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Repos } from './repos';
import { User } from './user';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search-git';
  user!: User
  repos!: Repos[]
  profile = "nyakiochristine"

  constructor(private githubService: GithubService) { }
  ngOnInit(): void {
this.getUserData()
  }
  getUserData() {
    this.githubService.getUser(this.profile).subscribe(data => (this.user = data))
    this.githubService.getRepos(this.profile).subscribe(data => (this.repos = data))

  }
  setProfile(username:string){
    this.profile= username
    this.getUserData()
  }

}

