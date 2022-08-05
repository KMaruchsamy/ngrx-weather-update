import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  domain = 'http://api.openweathermap.org';
  appId = '39ef67d53e7ab570a410aec14b094345';
  constructor(private http: HttpClient) {}

  getCurrentWeatherData() {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    });
    const currentWeatherQueryParams =
      'lat=' + lat + '&lon=' + lon + '&exclude=minutely&appid=';
    const data = '/data/2.5/onecall?';
    const url = this.domain + data + currentWeatherQueryParams + this.appId;
    return this.http.get(url);
  }

  getGeolocation() {
    const geo = '/geo/1.0/direct?';
    const location = 'q=bangalore&limit=1&appid=';
    return this.http.get(this.domain + geo + location + this.appId);
  }
}
