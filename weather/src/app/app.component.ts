import { Component, Input } from '@angular/core';
import { WeatherData } from './weather-data';
import { DataFetchService } from './data-fetch.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherData: WeatherData | undefined;
  private WeatherDataSubscription: Subscription | undefined;

  constructor(private datafetch: DataFetchService) {}

  mainWork() {
    this.WeatherDataSubscription = this.datafetch.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      },
      (error) => {
        alert('An error occured')
      }
    );
  }

  ngOnInit() {
    this.mainWork();
  }

  EventOccurs() {
    this.mainWork();
  }

}
