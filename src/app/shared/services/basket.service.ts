import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChangeBasket } from '../interfaces/change-basket';
import { NewQuantityBasket } from '../interfaces/new-quantity-basket';
import { SparePartUser } from '../interfaces/spare-part-user';
import { SparePartBasket } from '../interfaces/spare-part-basket';
import { SparePartsBasket } from '../interfaces/spare-parts-basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  change_basket(change_basket: ChangeBasket): Observable<NewQuantityBasket> {
    let url: string = environment.apiUrl + '/change-basket';
    return this.http.post<NewQuantityBasket>(url, change_basket, {
      withCredentials: true,
    });
  }

  get_basket(): Observable<SparePartsBasket> {
    let url: string = environment.apiUrl + '/basket';
    return this.http.get<SparePartsBasket>(url, {
      withCredentials: true,
    });
  }

  confirm_basket(): Observable<void> {
    let url: string = environment.apiUrl + '/confirm-basket';
    return this.http.post<void>(url, null, { withCredentials: true });
  }

  cancel_basket(): Observable<void> {
    let url: string = environment.apiUrl + '/cancel-basket';
    return this.http.post<void>(url, null, { withCredentials: true });
  }

  buy_basket(): Observable<void> {
    let url: string = environment.apiUrl + '/buy-basket';
    return this.http.post<void>(url, null, { withCredentials: true });
  }

  basket_process(): Observable<void> {
    let url: string = environment.apiUrl + '/basket-process';
    return this.http.post<void>(url, null, { withCredentials: true });
  }

}
