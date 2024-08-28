import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SparePart } from '../interfaces/spare-part';
import { SparePartUser } from '../interfaces/spare-part-user';
import { SparePartAdmin } from '../interfaces/spare-part-admin';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(
    search_query: string,
  ): Observable<SparePart[] | SparePartUser[] | SparePartAdmin[]> {
    let url: string = environment.apiUrl + '/Search';
    return this.http.get<SparePart[] | SparePartUser[] | SparePartAdmin[]>(
      url,
      {
        withCredentials: true,
        params: { search_query: search_query },
      },
    );
  }
}
