import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(
    private readonly spotify: SpotifyService) {
    this.loading = true;

    /* this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    }); */
    // this.loadNewReleases();
    // this.loading = false;
  }

  ngOnInit() {
    this.loadNewReleases();
    this.loading = false;
  }

  loadNewReleases() {
    this.spotify.getNewReleases().pipe(
      tap((data: any) => {
        this.nuevasCanciones = data;
      }),
      catchError((err, caught) => caught))
      .subscribe(_ => _);
    // this.spotify.getNewReleases().subscribe((data: any) => {
    // this.nuevasCanciones = data;
    // });
  }

}
