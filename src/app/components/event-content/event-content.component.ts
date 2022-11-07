import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.scss'],
})
export class EventContentComponent implements OnInit {

  @Input()
  data!: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  image = (data: any) => `${data.id}/thumbnail.${data.elements[0]?.filename}`
  buildId = (id: string) => `event_${id}`;

}
