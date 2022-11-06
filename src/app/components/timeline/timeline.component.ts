import {Component} from '@angular/core';
import {
  faBaby,
  faBabyCarriage,
  faCakeCandles,
  faChurch,
  faCirclePlus,
  faMartiniGlass,
  faPersonHiking,
  faPlane,
  faRing,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
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

  faAdd = faCirclePlus;

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

  icon(type: string): IconDefinition {
    switch (type) {

      case 'anniversary':
        return faCakeCandles;
      case 'holiday':
        return faPlane;
      case 'trip':
        return faPersonHiking;
      case 'party':
        return faMartiniGlass;
      case 'engagement':
        return faRing;
      case 'marriage':
        return faChurch;
      case 'newborn':
        return faBabyCarriage;
      case 'children':
        return faBaby;

      default:
        return faStar;
    }
  }

}
