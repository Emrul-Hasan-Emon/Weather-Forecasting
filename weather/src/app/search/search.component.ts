import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  location: any | undefined;
  constructor(private dataFetchService: DataFetchService) {}

  @Output()
  newEventEmitter = new EventEmitter<string>();

  ClickOccurs() {
    this.dataFetchService.setLocation(this.location);
    this.newEventEmitter.emit();
  }
}
