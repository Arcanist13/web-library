'''Routes for characters.'''

from typing import List, Optional
from fastapi import APIRouter

from database.sqlite3 import get_db_all

from models.book import Series
from image.image import ImageProcessing

router = APIRouter()
imageProcessing = ImageProcessing()

### lists
@router.get('/series', response_model=Optional[List[Series]], tags=["lists"])
async def get_all_series():
  '''Get all series.'''
  series = get_db_all('''
    SELECT GROUP_CONCAT(DISTINCT authour) as "authours", series_name, GROUP_CONCAT(series_number) as "series_numbers", series_total
    FROM books
    WHERE series_name is NOT NULL AND series_total is NOT NULL AND series_total != 0
    GROUP BY series_name
  ''')
  return series

@router.get('/authours', tags=["lists"])
async def get_all_authours():
  '''Get all authours.'''
  authours = get_db_all('''
    SELECT GROUP_CONCAT(authour, "/") as "authours" FROM (SELECT DISTINCT authour FROM books)
  ''')
  return set(authours[0]['authours'].split('/'))

@router.get('/series/name', tags=["lists"])
async def get_all_series_names():
  '''Get all series names.'''
  series = get_db_all('''
    SELECT DISTINCT series_name FROM books WHERE series_name IS NOT NULL
  ''')
  return [v['series_name'] for v in series]

@router.get('/genres', response_model=Optional[List[str]], tags=["lists"])
async def get_all_genres():
  '''Get all genres'''
  genres = get_db_all("SELECT * FROM genres ORDER BY id ASC")
  return [v['name'] for v in genres]
