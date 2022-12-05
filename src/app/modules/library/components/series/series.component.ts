import { Component } from '@angular/core';
import { ISeries } from 'src/app/static/models/series.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {

  constructor(
    private _seriesService: SeriesService
  ) { }

  public get series(): Array<ISeries> {
    return this._seriesService.series.sort((a, b) => {
      return this.seriesProportion(b.series_numbers, b.series_total) - this.seriesProportion(a.series_numbers, a.series_total)
    });
  }

  public seriesProportion(owned: string, total: number): number {
    return owned.split(',').length / total;
  }

  public fillSeriesGaps(owned: string, total: number): Array<string> {
    const split = owned.split(',');
    return [...Array(total).fill('X').map((val, idx) => split.includes((idx + 1).toString()) ? (idx + 1).toString() : 'X')];
  }

  public getSeriesCompleteness(owned: string, total: number): string {
    const proportion = this.seriesProportion(owned, total);
    return proportion === 1 ? 'text-success' : proportion > 0.4 ? 'text-warning' : 'text-danger';
  }

  public trackBySeries(index: number, series: ISeries) {
    return series.series_name;
  }

  public trackByIndex(index: number): any {
    return index;
  }

}