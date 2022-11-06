import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EventType} from '../../model/EventType';
import {LocalFile} from '../../model/LocalFile';
import {EventService} from '../../service/event.service';
import {Toaster} from '../../service/toaster';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css'],
})
export class EventAddComponent extends Toaster implements OnInit {

  form: FormGroup;
  eventType = EventType;

  files: FileList | undefined;
  fileUrls: LocalFile[] = [];

  constructor(private builder: FormBuilder, private service: EventService, private router: Router) {
    super();
    this.form = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [new Date(), Validators.required],
      type: [EventType.other, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.service.post({
      ...this.form.value,
      date: new Date(this.form.get('date')?.value).toISOString(),
    }).subscribe(res => {
      this.service.events.next([res, ...this.service.events.value]);

      if (!this.files) {
        return;
      }

      const formData = new FormData();
      Array.from(this.files).forEach(file => formData.append('files', file));

      this.service.postImage(res.id, formData).subscribe(res => {
        this.toast.fire({
          title: 'Erinnerung erstellt',
          icon: 'success',
        });
        this.router.navigate(['/timeline']);
      });
    });
  }

  selectFiles(event: any): void {
    this.files = event.target.files;
    this.fileUrls = [];

    if (!this.files) {
      return;
    }

    Array.from(this.files).forEach(file => {
      this.toLocalUrl(file);
    });
  }

  toLocalUrl(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (_event) => {
      if (!reader.result) {
        return;
      }

      const type = reader.result.toString().startsWith('data:video') ? 'video' : 'image';
      this.fileUrls.push({type, blob: reader.result.toString()});
    }
  }
}
