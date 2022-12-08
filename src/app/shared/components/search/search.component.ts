import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchTitle?: string;
  @Input() searchFilter?: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter();

  /**
   * Notify of a new filter
   */
  filterChange(): void {
    this.filterChanged.emit(this.searchFilter);
  }

  /**
   * Clear the search filter
   */
  filterClear(): void {
    this.searchFilter = '';
    this.filterChange();
  }
}
