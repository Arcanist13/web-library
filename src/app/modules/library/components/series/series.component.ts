import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_PATH } from 'src/app/static/constants';
import { ISeries } from 'src/app/static/models/series.model';
import { FilterService } from '../../services/filter.service';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  constructor(
    private _router: Router,
    private _seriesService: SeriesService,
    private _filterService: FilterService,
  ) { }

  /**
   * Navigate to the book list using the series name as the filter
   *
   * @param name  series name
   */
  public viewSeries(name: string): void {
    this._filterService.textFilter = name;
    this._router.navigate([`/${HOME_PATH}`]);
  }

  /**
   * Get the list of series sorted by completeness
   */
  public get series(): Array<ISeries> {
    return this._seriesService.series.sort((a, b) => this.seriesProportion(b.series_numbers, b.series_total) - this.seriesProportion(a.series_numbers, a.series_total));
  }

  /**
   * Calculate how complete the series is
   *
   * @param owned csv list of book indexes
   * @param total total books in the series
   * @returns     proportion of books owned
   */
  public seriesProportion(owned: string, total: number): number {
    return owned.split(',').length / total;
  }

  /**
   * Create a string list of books owned and missing, missing books are filled as 'X' in the list
   *
   * @param owned csv list of book indexes
   * @param total total number of books
   * @returns     list of books as indexes (e.g. "1 2 X X 5 6")
   */
  public fillSeriesGaps(owned: string, total: number): Array<string> {
    const split = owned.split(',');
    return [...Array(total).fill('X').map((val, idx) => (split.includes((idx + 1).toString()) ? (idx + 1).toString() : 'X'))];
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
