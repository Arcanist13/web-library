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
}

/**
 * Book icon model
 */
export interface IBookIcon {
  id: number;
  image_icon?: string;
}
