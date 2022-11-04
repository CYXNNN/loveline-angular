import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  api = `${environment.api}/user`;
  name: string = '';

  constructor(private http: HttpClient) {

  }

  login(data: any): void {
    this.http.post<string>(`${this.api}/authenticate`, data).subscribe(token => this.setSession(token));
  }

  private setSession(token: any) {
    this.name = token.name;
    localStorage.setItem('id_token', token.token);
    localStorage.setItem('expires', token.expiresAt);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires');
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('id_token');
    const exp = localStorage.getItem('expires');

    if (!token || !exp) {
      return false;
    }

    return token != undefined && new Date(exp) > new Date();
  }
}
