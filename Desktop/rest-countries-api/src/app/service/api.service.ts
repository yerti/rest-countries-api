import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population'
  private urlApiName = 'https://restcountries.com/v3.1/name/{name}?fullText=true'
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  getCountryByName(name: string): Observable<any> {
    const url = this.urlApiName.replace('{name}', name);
    return this.http.get<any>(url);
  }
}
