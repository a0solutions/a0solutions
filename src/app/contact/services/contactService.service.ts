import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost/apia0/api/apiContact.php';

  postContacForm(values: object): Observable<object> {
    return this.http.post(this.url, values);
  }
}
