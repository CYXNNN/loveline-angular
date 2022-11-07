import {Component, OnInit} from '@angular/core';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  faAdd = faCirclePlus;

  constructor() {
  }

  ngOnInit(): void {
  }

}
