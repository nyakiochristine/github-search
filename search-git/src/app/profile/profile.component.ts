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
  profile:any='nyakiochristine';
  user!:User;
  repos:any;
  repo!: Repos;
  error: any=null;


  constructor(public profileService:ProfileService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  search(searchTerm: any):any{
    if (searchTerm){
      this.profileService.getData(this.profile).subscribe((data)=>
      
      this.user= data
      
      
      )};
      this.profileService.getRepos(this.profile).subscribe((data)=>
      
      this.repos = data
      

    
      )}

}



  

  

  ngOnInit(); void {
  
    
    
  }






function ngOnInit() {
  throw new Error('Function not implemented.');
}

function nyakiochristine(nyakiochristine: any) {
  throw new Error('Function not implemented.');
}

