import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  api = `${environment.api}/user`;
  name: string = '';

  constructor(private http: HttpClient, private router: Router) {

  }

  login(data: any): void {
    this.http.post<string>(`${this.api}/authenticate`, data).subscribe(token => {
      this.setSession(token);
      this.router.navigate(['/']);
    });
  }

  refresh(): void {
    this.http.post<string>(`${this.api}/refreshtoken`, {refreshToken: localStorage.getItem('refresh_token')})
      .subscribe(token => this.updateSession(token));
  }

  private updateSession(token: any) {
    localStorage.setItem('id_token', token.token);
    localStorage.setItem('expires', token.expiresAt);
    localStorage.setItem('refresh_token', token.refreshToken);
  }

  private setSession(token: any) {
    this.name = token.name;
    this.updateSession(token);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['login']);
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
