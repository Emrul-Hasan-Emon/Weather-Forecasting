import { Injectable } from '@angular/core';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataFetchService {

  location: string = 'Dhaka';
  constructor(private http: HttpClient) { }
  private WeatherDataSubscription: Subscription | undefined;
  weatherData: WeatherData | undefined;

  getWeatherData(): Observable<WeatherData> {
    const WeatherUrlApi = `http://api.weatherapi.com/v1/current.json?key=c12372f14fec4d909da63442233010&q=${this.location}&aqi=yes`;
    return this.http.get<WeatherData>(WeatherUrlApi);
  }

  // mainWork() {
  //   this.WeatherDataSubscription = this.getWeatherData().subscribe(
  //     (data) => {
  //       this.weatherData = data;
  //     },
  //     (error) => {
  //       alert('An error occured')
  //     }
  //   );
  // }

  setLocation(location: string) {
    this.location = location;
  }
}
