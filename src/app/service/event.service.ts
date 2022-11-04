import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  api = `${environment.api}/event`;
  events = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
  }

  public post(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}`, data);
  }

  public postImage(eventId: string, data: FormData): void {
    this.http.post<any>(`${this.api}/${eventId}`, data, {
      reportProgress: true,
      responseType: 'json',
    }).subscribe(res => {
      // FIXME
    });
  }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}`);
  }

  public getImage(data: any): any {
    return this.http.get<any>(`${this.api}/event/${data}`)
  }

}
