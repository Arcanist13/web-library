from typing import Optional
from pydantic import BaseModel

class Book(BaseModel):
  '''Book model'''
  id:                int
  name:              str
  authour:           str
  genres:            Optional[str] = None
  series_name:       Optional[str] = None
  series_number:     Optional[int] = None
  series_total:      Optional[int] = None
  image_full:        Optional[str] = None
  image_icon:        Optional[str] = None

class BookIcon(BaseModel):
  '''Book icon model'''
  id:               int
  image_icon:       Optional[str] = None

class NewBook(BaseModel):
  '''New book model (excluding id)'''
  name:             str
  authour:          str
  genres:           Optional[str] = None
  series_name:      Optional[str] = None
  series_number:    Optional[int] = None
  series_total:     Optional[int] = None
  image_full:       Optional[str] = None
  image_icon:       Optional[str] = None

class Series(BaseModel):
  '''Book series model'''
  authours:         str
  series_name:      str
  series_numbers:   str
  series_total:     int
