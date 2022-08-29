import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  data() {

    return this.http.get(`http://localhost:1337/api/restaurants`).pipe()
  }


}
