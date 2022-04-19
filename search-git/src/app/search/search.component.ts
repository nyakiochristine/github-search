import { Component, Input, } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  user!:User

  @Input()
  repos:any

  constructor(public userService:GithubService){}




}

  
  