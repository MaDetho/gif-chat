import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { TenorTag } from '../model/tenorTag';
import { TenorGifs } from '../model/tenorGifs';

@Injectable()
export class TenorService {

  constructor(private http: Http) { }

  getTrending(): Observable<TenorTag[]> {
    return this.http.get(environment.tenorApiUrl + '/categories?key=' + environment.tenorApiKey)
      .map((res) => res.json().tags);
  }

  search(query: string): Observable<TenorGifs> {
    return this.http.get(environment.tenorApiUrl + '/search?q=' + query  +'&limit=50&key=' + environment.tenorApiKey)
      .map((res) => res.json());
  }
}
