import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repos } from '../repos';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  searchTerm!: string
  @Input()
  user!: User;
  @Input()
  repos!: Repos[]
@Output()searchEvent= new EventEmitter<string>()

  constructor() { }
  search() {
    this.searchEvent.emit(this.searchTerm)
  }





}






