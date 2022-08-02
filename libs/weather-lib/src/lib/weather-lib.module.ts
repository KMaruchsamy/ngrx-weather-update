import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRootComponent } from './app-root.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/weather',
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./open-weather/open-weather.module').then(
        (m) => m.OpenWeatherModule
      ),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [AppRootComponent],
  exports: [AppRootComponent],
})
export class WeatherLibModule {}
