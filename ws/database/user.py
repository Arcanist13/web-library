'''Database user management and functions'''

import sqlite3
from datetime import datetime

from fastapi import HTTPException, status

from auth.auth_helpers import get_password_hash
from models.user_model import UserRegister
from .sqlite3 import connect_db, DATABASE_PATH, get_db_one

def create_user(user: UserRegister):
  '''Create a new database user'''
  # Check for existing user
  if get_db_user(user.username) is not None:
    raise HTTPException(
      status_code=status.HTTP_409_CONFLICT,
      detail="Username already exists"
    )
  else:
    # Create the new user
    query = ''' INSERT INTO users (username, hashed_password, admin, created, email, activity)
              VALUES (?, ?, ?, ?, ?, ?) '''
    try:
      db_user = [
        user.username,
        get_password_hash(user.password),
        0,
        int(datetime.utcnow().timestamp()),
        user.email,
        int(datetime.utcnow().timestamp()),
      ]
      db_connection = connect_db(DATABASE_PATH)
      cur = db_connection.execute(query, db_user)
      db_connection.commit()
      res = cur.lastrowid
    except sqlite3.OperationalError as exception:
      res = None
      print('ERROR (create_user): Failed to create the user.')
      print(exception)
    return res

def get_db_user(username: str):
  '''Get a user from the database'''
  return get_db_one("SELECT * FROM users WHERE username = ?", [username])
