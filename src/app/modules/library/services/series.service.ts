import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SnackService } from 'src/app/shared/services/snack.service';
import { ISeries } from 'src/app/static/models/series.model';
import { HttpService } from 'src/app/static/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private _series: Array<ISeries> = [];
  private _onSeriesLoaded: BehaviorSubject<Array<ISeries>> = new BehaviorSubject<Array<ISeries>>([]);

  constructor(
    private _httpService: HttpService,
    private _snackService: SnackService,
  ) {
    // Load the series list
    this._httpService.get<Array<ISeries>>(`${environment.backendUri}/series`).subscribe({
      next: (series: Array<ISeries>) => {
        this._series = series;
        this._onSeriesLoaded.next(this._series);
      },
      error: () => { this._snackService.openInfoSnack('Failed to fetch series from the backend.'); }
    });
  }

  /**
   * Get the list of series
   */
  public get series(): Array<ISeries> {
    return this._series;
  }

  /**
   * Get event for when series are loaded
   */
  public get onSeriesLoaded(): BehaviorSubject<Array<ISeries>> {
    return this._onSeriesLoaded;
  }
}
