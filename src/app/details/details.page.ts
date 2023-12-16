import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, IonList, IonItem, IonAvatar, IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonText, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cashOutline, calendarOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonText, IonIcon, DatePipe, CurrencyPipe, RouterModule]
})
export class DetailsPage implements OnInit {

  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p'
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  // obtiene el id de los parametros de ruta
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie)
      this.movie.set(movie)
    })
  }

  constructor() {
    addIcons({ cashOutline, calendarOutline })
   }

  ngOnInit() {
  }

}
