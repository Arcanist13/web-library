import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchTitle?: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter();

  public filter: string;

  constructor() {
    this.filter = '';
  }

  /**
   * Notify of a new filter
   */
  filterChange(): void {
    this.filterChanged.emit(this.filter);
  }

  /**
   * Clear the search filter
   */
  filterClear(): void {
    this.filter = '';
    this.filterChange();
  }
}
