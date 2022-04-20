import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';







@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private  http: HttpClient) {}


  getData(userName:string):Observable <any> {
    const url = `https://api.github.com/users/${userName}`;
    return this.http.get<any>(url)
  }

  getRepos(userName:string):Observable <any> {
    const url = `https://api.github.com/users/${userName}/repos`;
    return this.http.get<any>(url)
  }
}
