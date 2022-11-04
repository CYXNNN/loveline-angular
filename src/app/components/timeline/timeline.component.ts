import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {

  data$: Observable<any[]>;
  currentYear: number = new Date().getFullYear();

  constructor(private service: EventService) {
    this.data$ = service.get();
  }

  new(): void {

  }

  image = (data: any) => `${data.id}/thumbnail.${data.elements[0]?.filename}`

  alignment = (idx: number) => idx % 2 == 0 ? 'left' : 'right';
  identify = (index: number, item: any) => item.id;
  yearChanged = (date: any) => {
    const year = new Date(date).getFullYear();
    if (year !== this.currentYear) {
      this.currentYear = year;
      return true;
    }

    return false;
  };

  icon(type: string): string {
    switch (type) {

      default:
        return 'hi';
    }
  }

}
