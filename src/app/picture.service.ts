// Kuvapalvelu, jonka kautta kuvat ja niiden tiedot välitetään komponenteille

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  // Finnan REST API:n kanssa keskustellaan HttpClientin avulla
  constructor(private http: HttpClient) {}

  // haku Finnasta
  // haetaan 24 hakusanaan täsmäävää kuvaa, jonka tekijänoikeudet sallivat käytön tässä sovelluksessa
  public getPictures(searchTerm: string): Observable<Response> {
    return this.http.get<Response>(
      `https://api.finna.fi/v1/search?filter%5B%5D=%7Eusage_rights_ext_str_mv%3A%220%2FA+Free%2F%22&filter%5B%5D=%7Eusage_rights_ext_str_mv%3A%220%2FC+NC%2F%22&filter%5B%5D=%7Eusage_rights_ext_str_mv%3A%220%2FB+BY%2F%22&filter%5B%5D=%7Eusage_rights_ext_str_mv%3A%220%2FD+ND%2F%22&filter%5B%5D=%7Eusage_rights_ext_str_mv%3A%220%2FE+NC-ND%2F%22&filter%5B%5D=%7Eformat_ext_str_mv%3A%220%2FImage%2F%22&lookfor=${searchTerm}&type=AllFields&lng=fi&limit=24&prettyPrint=true`
    );
  }
}
