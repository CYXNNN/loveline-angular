import {HttpClient} from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'secureimage',
})
export class SecurePipe implements PipeTransform {

  api = `${environment.api}/event`;

  constructor(private http: HttpClient) {
  }

  transform(url: string) {

    return new Observable<string>((observer: any) => {
      // This is a tiny blank image
      observer.next('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');

      // The next and error callbacks from the observer
      const {next, error} = observer;

      this.http.get(`${this.api}/${url}`, {responseType: 'blob'}).subscribe(response => {
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
  }
}
