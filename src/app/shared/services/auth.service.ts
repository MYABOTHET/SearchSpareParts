import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../dto/login.dto';
import { Observable } from 'rxjs';
import { RoleDto } from '../dto/role.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: WritableSignal<boolean> = signal(false);
  constructor(private http: HttpClient) {
    if (localStorage.getItem('isAuth')) {
      this.isAuth.set(true);
    }
  }

  login(login_dto: LoginDto): Observable<RoleDto> {
    let url: string = environment.apiUrl + '/Login';
    return this.http.post<RoleDto>(url, login_dto, { withCredentials: true });
  }

  logout(): Observable<void> {
    let url: string = environment.apiUrl + '/Logout';
    return this.http.post<void>(url, null, { withCredentials: true });
  }
}
