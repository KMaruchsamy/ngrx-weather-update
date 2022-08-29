import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrentWeatherData, GetGeoLocation } from './+store';
import { AppState } from './+store/app.state';

@Component({
  selector: 'ngrx-weather-update-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetCurrentWeatherData());
  }

  fetchCity(city: string) {
    if (city) {
      this.store.dispatch(GetGeoLocation({ city }));
    }
  }
}
