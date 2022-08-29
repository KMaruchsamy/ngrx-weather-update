import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngrx-weather-update-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() fetchCity = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  getCityName(event: any) {
    this.fetchCity.emit(event.target.value);
  }
}
