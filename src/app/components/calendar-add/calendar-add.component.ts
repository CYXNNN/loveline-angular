import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppointmentType} from '../../model/AppointmentType';
import {CalendarService} from '../../service/calendar.service';

@Component({
  selector: 'app-calendar-add',
  templateUrl: './calendar-add.component.html',
  styleUrls: ['./calendar-add.component.scss'],
})
export class CalendarAddComponent implements OnInit {

  form: FormGroup;
  categoryType = AppointmentType;

  constructor(private fb: FormBuilder, private service: CalendarService) {
    this.form = fb.group({
      title: [undefined, Validators.required],
      description: [undefined],
      location: [undefined],
      start: [undefined, Validators.required],
      end: [undefined, Validators.required],
      category: [AppointmentType.other, Validators.required],
      allDay: [false, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  add(): void {

    debugger;

    if (!this.form.valid) {
      return; // FIXME error
    }

    this.service.post(this.form.value);
  }

}
