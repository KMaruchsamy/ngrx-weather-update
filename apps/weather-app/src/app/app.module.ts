import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherLibModule } from '@ngrx-weather-update/weather-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, WeatherLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
