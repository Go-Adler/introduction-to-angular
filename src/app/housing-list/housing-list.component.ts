import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocations } from '../housing-locations';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  results: HousingLocations[] = []
  @Input() locationList: HousingLocations[] = []
  @Output() selectedLocationEvent = new EventEmitter<HousingLocations>()
  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: any) {
    if (!searchText) return
    
    console.log(this.results, 19);
    this.results = this.locationList.filter(location => location.city.toLowerCase().includes(searchText.toLowerCase()))
    console.log(this.results, 19);
  }

  selectHousingLocation(location: HousingLocations) {
    this.selectedLocationEvent.emit(location)
  }

}
