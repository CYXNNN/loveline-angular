import {Component, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loveline-angular';
  icon = faHeart;

  constructor(private auth: AuthService) {
  }

  public ngOnInit(): void {
    this.auth.refresh();
  }
}
