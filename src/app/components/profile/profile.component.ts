import {
  Component,
  OnInit
} from '@angular/core';

import {
  GithubService
} from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos: any[];
  username: string;

  constructor(
    private githubService: GithubService) {
      this.user = false;
    }

  getUser(): void {
    this.githubService.getUser().then(user => {
      this.user = user
    });
  }

  getRepos(): void {
    this.githubService.getRepos().then(repos => {
      this.repos = repos;
    });
  }

  searchUser() {
    if(this.username != '') {
      this.githubService.updateUser(this.username);
    }
    else {
      this.githubService.updateUser('yzhe554');
    }
    this.getUser();
    this.getRepos();
  }

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

}
