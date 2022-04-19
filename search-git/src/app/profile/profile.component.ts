import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repos } from '../repos';
import { User } from '../user';
import { catchError } from 'rxjs';
//import { profile } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any
  user!: User;
  repos:any;
  repo!:Repos;
  error:any=null;

  constructor(private profileService:ProfileService){}
  search(searchTerm:string){
    if (searchTerm== ''){
      this.profileService.getData(this.profile).subscribe((data)=>{
        console.log('User:', data)
        this.user= data

      });

      this.profileService.getRepos(this.profile).subscribe((data) =>{
        console.log('Repos:', data)
        this.repos= data

      });
      (this.profile='');
    }
  }




  ngOnInit(): void {
    this.search('nyakiochristine')
    
  }
}

  
     
      
      

