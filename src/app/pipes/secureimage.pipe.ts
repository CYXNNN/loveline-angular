import {HttpClient} from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'secureimage',
})
export class SecurePipe implements PipeTransform {

  api = `${environment.api}/event`;
  el: any;

  constructor(private http: HttpClient) {
  }

  transform(value: string, arg1: any) {
    this.el = document.getElementById(arg1);

    const x = new Observable<string>((observer: any) => {
      // This is a tiny blank image
      //observer.next('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');

      // The next and error callbacks from the observer
      const {next, error} = observer;
      this.http.get(`${this.api}/${value}`, {responseType: 'blob'}).subscribe(response => {
        const reader = new FileReader();
        reader.readAsDataURL(response);

        reader.onloadend = function () {
          observer.next(reader.result);
        };
      });
      return {
        unsubscribe() {
        },
      };
    });
    x.subscribe(next => {
      // hahahaa what a cool and clean way to set a background image
      this.el.style.backgroundImage =
        `linear-gradient(to left, rgba(245, 246, 252, 0.22), rgb(255,255,255)), url(${next})`;
    })
  }
}
