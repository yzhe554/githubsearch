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

  user: any[];
  repos: any[];

  constructor(
    private githubService: GithubService) {}

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

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

}
