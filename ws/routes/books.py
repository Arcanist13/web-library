'''Routes for characters.'''

from typing import List, Optional
from fastapi import APIRouter, HTTPException, Depends

from database.sqlite3 import delete_id, execute, get_db_all, get_db_one

from auth.auth import get_current_user
from models.user_model import User
from models.book import Book, NewBook, BookIcon
from image.image import ImageProcessing

router = APIRouter()
imageProcessing = ImageProcessing()

### Books
@router.get('/books', response_model=Optional[List[Book]], tags=["book"])
async def get_all_books():
  '''Get all books'''
  books = get_db_all("SELECT id, name, authour, genres, series_name FROM books ORDER BY id ASC")
  return books

@router.get('/icons', response_model=Optional[List[BookIcon]], tags=["book"])
async def get_all_icons():
  '''Get all icons.'''
  icons = get_db_all("SELECT id, image_icon FROM books")
  return icons

@router.get('/book/{book_id}', response_model=Optional[Book], tags=["book"])
async def get_book(book_id: int):
  '''Get a specific book'''
  book = get_db_one("SELECT * FROM books WHERE id = ? ORDER BY id ASC", [book_id])
  return book

@router.delete("/book/remove/{book_id}", tags=["book"])
async def remove_book(book_id: int, user: User = Depends(get_current_user)):
  '''Remove a book'''
  if book_id is not None and user is not None:
    if not delete_id('books', book_id):
      raise HTTPException(status_code=500, detail='Failed to delete book')
    # Delete all associated things
    execute('''
      DELETE FROM books WHERE id = ?
    ''', [book_id])
    return
  else:
    raise HTTPException(status_code=500, detail='Failed to delete a book')

@router.post("/book/edit/{book_id}", tags=["book"])
async def edit_book(book_id: int, book: NewBook, user: User = Depends(get_current_user)):
  '''Edit an existing book'''
  if book_id is not None and user is not None:
    execute('''
      UPDATE books SET
      name = ?, authour = ?, genres = ?, series_name = ?, series_number = ?, series_total = ?, image_full = ?, image_icon = ?
      WHERE id = ?
    ''', [book.name, book.authour, book.genres, book.series_name, book.series_number, book.series_total, book.image_full, book.image_icon, book_id])
    return get_db_one('SELECT * FROM books WHERE id = ?', [book_id])
  else:
    raise HTTPException(status_code=500, detail='Failed to modify a book')

@router.post("/book/add", tags=["book"])
async def add_book(book: NewBook, user: User = Depends(get_current_user)):
  '''Add a new book'''
  if book is not None and user is not None:
    execute('''
      INSERT INTO books
        (name, authour, genres, series_name, series_number, series_total, image_full, image_icon)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?)
    ''', [
      book.name, book.authour, book.genres, book.series_name, book.series_number, book.series_total, book.image_full, book.image_icon
    ])
  else:
    raise HTTPException(status_code=500, detail='Cannot add book')
  return get_db_one('SELECT * FROM books ORDER BY id DESC LIMIT 1')
