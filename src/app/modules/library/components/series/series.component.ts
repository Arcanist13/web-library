import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HOME_PATH } from 'src/app/static/constants';
import { ISeries } from 'src/app/static/models/series.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { STORAGE_KEY_BOOKS_PAGE_INDEX, STORAGE_KEY_SERIES_PAGE_INDEX, STORAGE_KEY_SERIES_PAGE_SIZE } from 'src/app/static/storage_keys.constants';
import { FilterService } from '../../services/filter.service';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  providers: [ObservableService]
})
export class SeriesComponent {
  // Paginator
  public pageSizeOptions = [20, 50, 100];
  public pageSize = this.pageSizeOptions[0];
  public pageIndex = 0;
  public length = 0;

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = true;
  public disabled = false;

  private _seriesList: Array<ISeries>;

  constructor(
    private _router: Router,
    private _observableService: ObservableService,
    private _seriesService: SeriesService,
    private _filterService: FilterService,
  ) {
    // Load the series
    this._seriesList = this._seriesService.onSeriesLoaded.value;
    this._observableService.subscribe(
      this._seriesService.onSeriesLoaded,
      () => {
        this._seriesList = this._filterService.filterSeries(this._seriesService.series);
        this._seriesList.sort((a, b) => this.seriesProportion(b.series_numbers, b.series_total) - this.seriesProportion(a.series_numbers, a.series_total));
        this.length = this._seriesList.length;
      }
    );

    // Load the pagination settings
    const savedPageSize = localStorage.getItem(STORAGE_KEY_SERIES_PAGE_SIZE);
    if (savedPageSize !== null) {
      this.pageSize = +savedPageSize;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_SERIES_PAGE_SIZE, this.pageSize.toString());
    }
    const savedPageIndex = localStorage.getItem(STORAGE_KEY_SERIES_PAGE_INDEX);
    if (savedPageIndex !== null) {
      this.pageIndex = +savedPageIndex;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_SERIES_PAGE_INDEX, this.pageIndex.toString());
    }
  }

  /**
   * Navigate to the book list using the series name as the filter
   *
   * @param name  series name
   */
  public viewSeries(name: string): void {
    this._filterService.bookFilter = `series:${name}`;
    localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_INDEX, (0).toString());
    this._router.navigate([`/${HOME_PATH}`]);
  }

  /**
   * Handle user page modification events
   *
   * @param e page modification
   */
  public handlePageEvent(e: PageEvent): void {
    this.length = e.length;
    this.pageSize = e.pageSize;
    localStorage.setItem(STORAGE_KEY_SERIES_PAGE_SIZE, this.pageSize.toString());
    this.pageIndex = e.pageIndex;
    localStorage.setItem(STORAGE_KEY_SERIES_PAGE_INDEX, this.pageIndex.toString());
  }

  /**
   * Get the list of series sorted by completeness
   */
  public get series(): Array<ISeries> {
    const startIdx = this.pageIndex * this.pageSize;
    const endIdx = (startIdx + this.pageSize) - 1;
    return this._seriesList.slice(startIdx, endIdx);
  }

  /**
   * Calculate how complete the series is
   *
   * @param owned csv list of book indexes
   * @param total total books in the series
   * @returns     proportion of books owned
   */
  public seriesProportion(owned: string, total: number): number {
    return this._seriesService.seriesProportion(owned, total);
  }

  /**
   * Create a string list of books owned and missing, missing books are filled as 'X' in the list
   *
   * @param owned csv list of book indexes
   * @param total total number of books
   * @returns     list of books as indexes (e.g. "1 2 X X 5 6")
   */
  public fillSeriesGaps(owned: string, total: number): Array<string> {
    return this._seriesService.fillSeriesGaps(owned, total);
  }

  /**
   * Get the colour class to apply based on series proportion
   *
   * @param owned csv list of book indexes
   * @param total total books in the series
   * @returns     css class to apply
   */
  public getSeriesNamesCompleteness(owned: string, total: number): string {
    const proportion = this.seriesProportion(owned, total);
    if (proportion === 1) return 'text-success';
    return proportion > 0.4 ? 'text-warning' : 'text-danger';
  }

  /**
   * Notify of a new filter
   */
  searchChange(searchText: string): void {
    this._filterService.seriesFilter = searchText;

    this._seriesList = this._filterService.filterSeries(this._seriesService.series);
    this._seriesList.sort((a, b) => this.seriesProportion(b.series_numbers, b.series_total) - this.seriesProportion(a.series_numbers, a.series_total));

    // Update pageinator properties
    this.length = this._seriesList.length;
    this.pageIndex = 0;
    localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_INDEX, this.pageIndex.toString());
  }

  /**
   * Series loop tracker
   *
   * @param index   item index
   * @param series  series identifier
   * @returns       track by name
   */
  public trackBySeries(index: number, series: ISeries) {
    return series.series_name;
  }

  /**
   * Index tracker
   *
   * @param index   item index
   * @returns       track by index
   */
  public trackByIndex(index: number): any {
    return index;
  }
}
