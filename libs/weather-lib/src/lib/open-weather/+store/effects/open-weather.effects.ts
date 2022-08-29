import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OpenWeatherService } from '../../services/open-weather.service';
import {
  GetCurrentWeatherData,
  GetCurrentWeatherDataFail,
  GetCurrentWeatherDataSuccess,
  GetGeoLocation,
  GetGeoLocationSuccess,
  GetGeoLocationFail,
} from '../actions/open-weather.actions';
import { of } from 'rxjs';

@Injectable()
export class OpenWeatherEffects {
  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService
  ) {}

  GetCurrentWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCurrentWeatherData),
      switchMap(() =>
        this.openWeatherService.getCurrentWeatherData().pipe(
          map((response) =>
            GetCurrentWeatherDataSuccess({ weather: response })
          ),
          catchError(() => of(GetCurrentWeatherDataFail()))
        )
      )
    )
  );

  GetGeoLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetGeoLocation),
      switchMap(({ city }) =>
        this.openWeatherService.getGeolocation(city).pipe(
          map((response) => GetGeoLocationSuccess({ geo: response })),
          catchError(() => of(GetGeoLocationFail()))
        )
      )
    )
  );
}
