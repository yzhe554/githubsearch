import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any[];

  constructor(
    private githubService: GithubService) {}

  getUser(): void {
    this.githubService.getUser().then(user => this.user = user);
  }

  ngOnInit() {
    this.getUser();
  }

}
