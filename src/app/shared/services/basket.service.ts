import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChangeBasket } from '../interfaces/change-basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  change_basket(change_basket: ChangeBasket): Observable<void> {
    let url: string = environment.apiUrl + '/change-basket';
    return this.http.post<void>(url, change_basket, { withCredentials: true });
  }
}
