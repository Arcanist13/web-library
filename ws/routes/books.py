'''Routes for characters.'''

from typing import List, Optional
from fastapi import APIRouter, HTTPException, Depends, UploadFile

from database.sqlite3 import delete_id, execute, get_db_all, get_db_one

from auth.auth import get_current_user
from models.user_model import User
from models.book import Book, NewBook, BookIcon, BookImage
from image.image import ImageProcessing

router = APIRouter()
imageProcessing = ImageProcessing()

### Books
@router.get('/books', response_model=Optional[List[Book]], tags=["book"])
async def get_all_books():
  '''Get all books'''
  books = get_db_all("SELECT id, name, authour, genres, series_name, series_number, series_total, notes, damaged, inconsistent FROM books ORDER BY id ASC")
  return books or []

@router.get('/icons', response_model=Optional[List[BookIcon]], tags=["book"])
async def get_all_icons():
  '''Get all icons.'''
  icons = get_db_all("SELECT id, image_icon FROM books ORDER BY id ASC")
  return icons or []

@router.post("/book/genimage", tags=["book"])
async def process_image(image: UploadFile, user: User = Depends(get_current_user)):
  '''Process the images and return the full image and icon'''
  if image is not None and user is not None:
    try:
      (img, ico) = imageProcessing.process_image(image.file.read(), 400, 60)
      if img is not None and ico is not None:
        return {"image_full": img, "image_icon": ico}
      raise HTTPException(status_code=500, detail='Image processing did not return a result')
    except:
      raise HTTPException(status_code=500, detail='Image processing failed')
  raise HTTPException(status_code=500, detail='Unauthorised')

@router.get('/book/image/{book_id}', response_model=Optional[BookImage], tags=["book"])
async def get_book(book_id: int):
  '''Get a specific book'''
  book = get_db_one("SELECT image_full FROM books WHERE id = ? ORDER BY id ASC", [book_id])
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
      name = ?, authour = ?, genres = ?, series_name = ?, series_number = ?, series_total = ?, image_full = ?, image_icon = ?, notes = ?, damaged = ?, inconsistent = ?
      WHERE id = ?
    ''', [book.name, book.authour, book.genres, book.series_name, book.series_number, book.series_total, book.image_full, book.image_icon, book.notes, book.damaged, book.inconsistent, book_id])

    # Update series totals
    if book.series_name is not None and book.series_name != "":
      execute('UPDATE books SET series_total = ? WHERE series_name = ?', [book.series_total, book.series_name])
    return get_db_one('SELECT * FROM books WHERE id = ?', [book_id])
  else:
    raise HTTPException(status_code=500, detail='Failed to modify a book')

@router.post("/book/add", tags=["book"])
async def add_book(book: NewBook, user: User = Depends(get_current_user)):
  '''Add a new book'''
  if book is not None and user is not None:
    execute('''
      INSERT INTO books
        (name, authour, genres, series_name, series_number, series_total, image_full, image_icon, notes, damaged, inconsistent)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', [
      book.name, book.authour, book.genres, book.series_name, book.series_number, book.series_total, book.image_full, book.image_icon, book.notes, book.damaged, book.inconsistent
    ])

    # Update series totals
    if book.series_name is not None and book.series_name != "":
      execute('UPDATE books SET series_total = ? WHERE series_name = ?', [book.series_total, book.series_name])
  else:
    raise HTTPException(status_code=500, detail='Cannot add book')
  return get_db_one('SELECT * FROM books ORDER BY id DESC LIMIT 1')
