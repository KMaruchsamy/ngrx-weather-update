import { createReducer, on } from '@ngrx/store';
import {
  GetCurrentWeatherData,
  GetCurrentWeatherDataFail,
  GetCurrentWeatherDataSuccess,
  GetGeoLocation,
  GetGeoLocationFail,
  GetGeoLocationSuccess,
} from '../actions/open-weather.actions';

export interface weatherState {
  openWeather: any;
  geoLocation: any;
}
export const weatherFeatureKey = 'weather';

export interface WeatherRootState {
  [weatherFeatureKey]: weatherState;
}
const initialState: weatherState = { openWeather: null, geoLocation: null };

export const openWeatherReducer = createReducer(
  initialState,
  on(GetCurrentWeatherData, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(GetCurrentWeatherDataSuccess, (state, { weather }) => ({
    ...state,
    openWeather: weather,
    loading: false,
    loaded: true,
  })),
  on(GetCurrentWeatherDataFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(GetGeoLocation, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(GetGeoLocationSuccess, (state, { geo }) => ({
    ...state,
    geoLocation: geo,
    loading: false,
    loaded: true,
  })),
  on(GetGeoLocationFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  }))
);
