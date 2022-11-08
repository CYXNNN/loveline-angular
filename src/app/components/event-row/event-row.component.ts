import {Component, Input, OnInit} from '@angular/core';
import {faBirthdayCake, faCalendarAlt, faUtensils} from '@fortawesome/free-solid-svg-icons';
import {Appointment} from '../../model/Appointment';
import {AppointmentType} from '../../model/AppointmentType';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.scss'],
})
export class EventRowComponent implements OnInit {

  @Input()
  appointment!: Appointment;

  constructor() {
  }

  ngOnInit(): void {
  }

  category = (category: AppointmentType) => {
    switch (category as string) {
      case 'birthday':
        return faBirthdayCake;
      case 'dinner':
        return faUtensils;
      default:
        return faCalendarAlt;
    }
  }

  format = () => this.appointment.allDay ? 'dd.MM' : 'dd.MM HH:mm';
}
