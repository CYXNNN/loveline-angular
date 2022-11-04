import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input()
  form!: FormGroup;

  @Input()
  name: string = '';

  @Input()
  label: string = '';

  @Input()
  placeholder: string = '...';

  @Input()
  type: string = 'text';

  constructor() {
  }

  ngOnInit(): void {
  }

}
