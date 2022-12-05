import { Injectable } from '@angular/core';
import { ISeries } from 'src/app/static/models/series.model';
import { HttpService } from 'src/app/static/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private _series: Array<ISeries> = [];

  constructor(
    private _httpService: HttpService,
  ) {
    // Load the series list
    this._httpService.get<Array<ISeries>>(`${environment.backendUri}/series`).subscribe((series: Array<ISeries>) => {
      this._series = series;
    });
  }

  public get series(): Array<ISeries> {
    return this._series;
  }

}
