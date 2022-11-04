import {Injectable} from '@angular/core';
import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalState {

  signedIn: boolean = false;

  constructor(private userService: UserService) {
  }

  signin(data: any): void {
    this.userService.login(data).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(data.username + ':' + data.password),
        );
        this.signedIn = true;
      } else {
        alert('Authentication failed.')
      }
    })
  }

}
