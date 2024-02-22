import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Picture } from './picture';
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
      `https://api.finna.fi/v1/record?id=museovirasto.54985E9CCC211F7CE350885BB0BA4DFB`
    );
  }
}
