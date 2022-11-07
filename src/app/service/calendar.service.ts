import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Toaster} from './toaster';

@Injectable({
  providedIn: 'root',
})
export class CalendarService extends Toaster {

  api = `${environment.api}/calendar`;
  entries = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public post(data: any): void {
    this.http.post<any>(`${this.api}`, data).subscribe(res => {
      this.toast.fire({
        title: 'Termin erstellt',
        icon: 'success',
      });
      this.router.navigate(['/calendar'])
      console.log(res);
    });
  }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}`);
  }

  public getNext(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}`);
  }
}
