import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  uri = 'http://www.mocky.io/v2/5d8981933000006400b9a155';

  constructor(private http: HttpClient) { }

  getAgenda() {
    return this.http.get<any>(this.uri);
  }
}
