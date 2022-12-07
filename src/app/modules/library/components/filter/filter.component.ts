import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public searchText: string;

  constructor(
    private _filterService: FilterService,
  ) {
    this.searchText = this._filterService.textFilter;
  }

  /**
   * Notify of a new filter
   */
  searchChange(): void {
    this._filterService.textFilter = this.searchText;
  }

  /**
   * Clear the search filter
   */
  searchClear(): void {
    this.searchText = '';
    this.searchChange();
  }
}
