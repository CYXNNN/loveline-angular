import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Appointment} from '../model/Appointment';
import {Toaster} from './toaster';

@Injectable({
  providedIn: 'root',
})
export class CalendarService extends Toaster {

  api = `${environment.api}/calendar`;
  entries = new BehaviorSubject<Appointment[]>([]);

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public post(data: Appointment): void {
    this.http.post<Appointment>(`${this.api}`, data).subscribe(res => {
      this.toast.fire({
        title: 'Termin erstellt',
        icon: 'success',
      });
      this.router.navigate(['/calendar'])
      console.log(res);
    });
  }

  public get(): Observable<Appointment[]> {
    return this.http.get<any[]>(`${this.api}`);
  }

  public getNext(limit: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.api}/future/${limit}`);
  }
}
