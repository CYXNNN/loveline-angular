import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  form: FormGroup;

  constructor(private builder: FormBuilder, private auth: AuthService) {
    this.form = this.builder.group({
      username: [undefined, [Validators.required, Validators.minLength(3)]],
      password: [undefined, [Validators.required, Validators.minLength(3)]],
    });
  }

  public login(): void {

    if (!this.form.valid) {
      return;
    }

    this.auth.login(this.form.value);
  }

  logout = () => this.auth.logout();

  loggedIn = () => this.auth.isLoggedIn();
  name = () => this.auth.name;

}
