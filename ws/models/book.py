from typing import Optional
from pydantic import BaseModel

class Book(BaseModel):
  '''Book model.'''
  id:                int
  name:              str
  authour:           str
  genres:            Optional[str] = None
  series_name:       Optional[str] = None
  series_number:     Optional[int] = None
  series_total:      Optional[int] = None
  image_full:        Optional[str] = None
  image_icon:        Optional[str] = None

class NewBook(BaseModel):
  name:              str
  authour:           int
  genres:            Optional[str] = None
  series_name:       Optional[str] = None
  series_number:     Optional[int] = None
  series_total:      Optional[int] = None
  image:             Optional[str] = None

class Series(BaseModel):
  authours:          str
  series_name:       str
  series_numbers:    str
  series_total:      int
