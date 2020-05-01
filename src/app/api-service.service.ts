import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/user';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}
  getUserslist(): any[] {
    var userName = [
      {
        User: 'Priyam Srivastava',
        Age: '26',
      },
      {
        User: 'Naman Mittal',
        Age: '25',
      },
    ];
    return userName;
  }
  getallUsers(username: string): Observable<User[]> {
    return this._http.get<User[]>(
      'https://api.github.com/users/' +
        username +
        '?client_id=e8a6bb4d73eb88e76cc4&client_secret=40d23cf38f3559bc0de1eee10fea60a67131cc75'
    );
  }
  getUserRepos(username: string): Observable<User[]> {
    return this._http.get<User[]>(
      'https://api.github.com/users/' +
      username +'/repos'+
      '?client_id=e8a6bb4d73eb88e76cc4&client_secret=40d23cf38f3559bc0de1eee10fea60a67131cc75'
    );
  }
}
