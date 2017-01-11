import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = '9aed60347e5834c3cb7a';
  private client_secret = 'bbd11dc1b974f478ec8160db0cb20f20e105c7e4';

  constructor(private http: Http) {
    this.username = 'yzhe554';
  }

  getUser(): Promise <any> {
    console.log('service is working');
    return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getRepos(): Promise <any> {
    console.log('service is working');
    return this.http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateUser(username): void {
    this.username = username;
  }

  private handleError(error: any): Promise < any > {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
