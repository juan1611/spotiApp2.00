import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDkCnlX-v8lyiN8SepQfU7Ud5vMEABHMRW8klHhJ8Ge2-nHZrwhWHUaABKCZzeJniWgXFA9-cN7CbSVAcQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

}
