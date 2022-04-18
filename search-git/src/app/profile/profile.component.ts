import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repos } from '../repos';
import { User } from '../user';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
