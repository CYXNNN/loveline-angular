import {AppointmentType} from './AppointmentType';
import {Persistent} from './Persistent';

export interface Appointment extends Persistent {
  title: string;
  description: string,
  location: string,
  start: Date,
  end: Date,
  category: AppointmentType,
  allDay: boolean,
}
