import { props, createAction } from '@ngrx/store';

export const GetGeoLocation = createAction('[Get] Geo Location');
export const GetGeoLocationSuccess = createAction(
  '[Get] Geo Location Success',
  props<{ geo: any }>()
);
export const GetGeoLocationFail = createAction('[Get] Geo Location Fail');
export const GetCurrentWeatherData = createAction('[Current] Weather Data');
export const GetCurrentWeatherDataSuccess = createAction(
  '[Current] Weather Data Success',
  props<{ weather: any }>()
);
export const GetCurrentWeatherDataFail = createAction(
  '[Current] Weather Data Fail'
);
