'''Routes for characters.'''

from typing import List, Optional
from fastapi import APIRouter

from database.sqlite3 import get_db_all

from models.book import Series
from image.image import ImageProcessing

router = APIRouter()
imageProcessing = ImageProcessing()

### Series
@router.get('/series', response_model=Optional[List[Series]], tags=["series"])
async def get_all_series():
  '''Get all series.'''
  series = get_db_all('''
    SELECT GROUP_CONCAT(DISTINCT authour) as "authours", series_name, GROUP_CONCAT(series_number) as "series_numbers", series_total
    FROM books
    WHERE series_name is NOT NULL AND series_total is NOT NULL AND series_total != 0
    GROUP BY series_name
  ''')
  return series
