import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzAHvACo7HTlbop2Wg0fVe7AksDJH1jYiH8WnPbhdkI6DbUYV1typU2IOTcHTe9yHmCKFKAnh2Zu7Aaa4'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }

  getArtista ( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`) //Ese parametro en backticks se llama template-string
    .pipe( map( data => data['artists'].items)); // Cuando en una funcion de flecha es un return de una sola linea, se puede escribir asi
  }

}
