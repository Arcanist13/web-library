import { Injectable } from '@angular/core';
import { IBook } from 'src/app/static/models/book.model';
import { STORAGE_KEY_BOOKS } from 'src/app/static/storage_keys.constants';
import { SnackService } from './snack.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _savedBooks: Array<IBook>;

  constructor(
    private _snackService: SnackService,
  ) {
    this._savedBooks = this.getStoredObject(STORAGE_KEY_BOOKS) ?? [];
  }

  public checkIfStored(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public storeObject(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      this._snackService.openInfoSnack('Failed to save data locally.');
    }
  }

  public getStoredObject(key: string): any | undefined {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : undefined;
    } catch {
      this._snackService.openInfoSnack('Failed to retrieve locally stored data.');
    }
  }
}
