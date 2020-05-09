import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  Username: any[];
  repoList: string[];
  PhotoUrl: string;
  RepositoryCount: number;
  sendUsername: string;
  public isCollapsed = false;
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed4 = false;
  constructor(private apiService: ApiServiceService) {}
  ngOnInit() {}
  searchUser() {
    console.log(this.sendUsername);
    let usernameFromPage: string = this.sendUsername;
    this.apiService.getallUsers(usernameFromPage).subscribe(
      (response: User[]) => {
        console.log(response);
        this.Username = [response];
        this.apiService.getUserRepos(usernameFromPage).subscribe(
          (res: string[]) => {
            this.repoList = res;
            console.log(this.repoList);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
