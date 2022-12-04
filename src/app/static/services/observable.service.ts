import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class ObservableService implements OnDestroy {

  private readonly _subscriptions: Array<Subscription>;

  constructor() {
    this._subscriptions = [];
  }

  /**
   * Generic subscription that will clean up on service destruction
   *
   * @param o         observable
   * @param next      next callback
   * @param error     error callback
   * @param complete  complete callback
   */
  public subscribe<T>(
    o: Observable<T>,
    next?: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    this._subscriptions.push(o.subscribe({next, error, complete}));
  }

  /**
   * Clear all subscriptions
   */
  ngOnDestroy(): void {
    this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
