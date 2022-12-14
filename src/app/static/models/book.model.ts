/**
 * Book model
 */
export interface IBook {
  id: number;
  name: string;
  authour: string;
  genres?: string;
  series_name?: string;
  series_number?: number;
  series_total?: number;
  image_full?: string;
  image_icon?: string;
  notes?: string;
  damaged?: number;
  inconsistent?: number;
}

/**
 * Book icon model
 */
export interface IBookIcon {
  id: number;
  image_icon?: string;
}

/**
 * Book image model
 */
export interface IBookImage {
  id: number;
  image_full?: string;
}

/**
 * Book images processed
 */
export interface IBookImageProcessed {
  image_full: string;
  image_icon: string;
}
