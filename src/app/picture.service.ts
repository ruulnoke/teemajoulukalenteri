import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from './response';

@Injectable({
  // kuuluuko olla ???????????????????
  providedIn: 'root',
})
export class PictureService {
  // private apiUrl = 'https://api.finna.fi/v1';

  constructor(private http: HttpClient) {}

  getPicture(): Observable<Response> {
    return this.http.get<Response>(
      `https://api.finna.fi/api/v1/search?lookfor=savonlinna&type=AllFields&filter%5B%5D=format%3A1%2FImage%2FImage%2F&sort=relevance%2Cid%20asc&page=1&limit=24&prettyPrint=false&lng=fi`
    );
  }
}
