import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CookieText {
  cookie:string;
}

// const SERVER = 'http://localhost:3000/api/cookie'
const SERVER = '/api/cookie'

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private http:HttpClient) { }

  async getCookies(n:string = '1'):Promise<CookieText[]> {
    const params = new HttpParams().set('count', n)
    const resp = await this.http.get<CookieText[]>(SERVER, { params: params}).toPromise()
    return resp as CookieText[];
  }
}
