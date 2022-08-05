import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GetCurrentWeatherData,
  GetGeoLocation,
} from './+store/actions/open-weather.actions';
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
    this.store.dispatch(GetGeoLocation());
  }
}
