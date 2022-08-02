import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OpenWeatherModule {}
