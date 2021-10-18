import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/PersonPhone';

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(businessEntityID: any): Observable<any> {
    return this.http.get(`${baseUrl}/${businessEntityID}`);
  }

  create(phoneNumber: any): Observable<any> {
    return this.http.post(baseUrl, phoneNumber);
  }

  update(businessEntityID: any, phoneNumber: any, phoneNumberTypeID:any): Observable<any> {
    return this.http.put(`${baseUrl}/${businessEntityID}`, businessEntityID, phoneNumber);
  }

  delete(businessEntityID: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${businessEntityID}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByPhoneNumber(phoneNumber: any): Observable<any> {
    return this.http.get(`${baseUrl}?title=${phoneNumber}`);
  }
}
