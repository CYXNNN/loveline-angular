import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  closeResult = '';
  form: FormGroup;

  constructor(private modalService: NgbModal, private builder: FormBuilder, private auth: AuthService) {
    this.form = this.builder.group({
      username: [undefined, [Validators.required, Validators.minLength(3)]],
      password: [undefined, [Validators.required, Validators.minLength(3)]],
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed`;
      },
    );
  }

  public login(): void {

    if (!this.form.valid) {
      return;
    }

    this.auth.login(this.form.value);
    this.modalService.dismissAll();
  }

  logout = () => this.auth.logout();

  loggedIn = () => this.auth.isLoggedIn();
  name = () => this.auth.name;

}
