import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { YEAR } from 'ngx-bootstrap/chronos/units/constants';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  readonly YELP_URL = 'https://api.yelp.com/v3/businesses/search';
  constructor(private http: HttpClient) { }

  getYelpHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'YELP_API_FUSION_KEY');
  }

  getVegetarian(vegan?: boolean) {
    const headers = this.getYelpHeaders();
    const url = this.YELP_URL + '?term=food';
    const vegetarianData = this.http.get(url, { headers });
  }
}
