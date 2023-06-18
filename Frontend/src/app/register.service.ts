import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from './register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseurl = 'http://localhost:5100/api/user/register';
  constructor(private httpClient: HttpClient) {}
  adduser(registereduser: userSchema): Observable<userSchema> {
    return this.httpClient.post<userSchema>(this.baseurl, registereduser);
  }
}
