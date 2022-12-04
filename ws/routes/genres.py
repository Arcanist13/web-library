'''Routes for characters.'''

from typing import List, Optional
from fastapi import APIRouter

from database.sqlite3 import get_db_all

from image.image import ImageProcessing
from models.genre import Genre

router = APIRouter()
imageProcessing = ImageProcessing()

### Genres
@router.get('/genres', response_model=Optional[List[Genre]], tags=["genre"])
async def get_all_genres():
  '''Get all genres.'''
  genres = get_db_all("SELECT * FROM genres ORDER BY id ASC")
  return genres
