import { Component, Input } from '@angular/core';
import { WeatherData } from '../weather-data';
import { DataFetchService } from '../data-fetch.service';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {
  @Input()
  weatherData: WeatherData | undefined;

  constructor(private data: DataFetchService) {}


}
