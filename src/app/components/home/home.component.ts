import {Component, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';
import {Appointment} from '../../model/Appointment';
import {CalendarService} from '../../service/calendar.service';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  upcoming: Observable<Appointment[]>
  random: Observable<any[]>
  icon = faHeart;
  togetherSince = new Date('04/04/2022');
  days = 0;
  currentBg = Math.floor(Math.random() * 3) + 1;

  constructor(private service: CalendarService, private event: EventService) {
    this.upcoming = this.service.getNext(5);
    this.random = this.event.getRandom();

    const diff = new Date().getTime() - this.togetherSince.getTime();
    this.days = Math.round(diff / (1000 * 3600 * 24));

    setInterval(() => {
      if (this.currentBg == 4) {
        this.currentBg = 1;
      } else {
        this.currentBg = this.currentBg + 1;
      }
    }, 5000);
  }

  ngOnInit(): void {
  }

  bgClass = () => `bg${this.currentBg}`

}
