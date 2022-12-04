'''Router class for user related queries.'''

from datetime import timedelta
from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from auth.auth import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, get_current_user, get_current_admin_user
from database.user import create_user
from database.sqlite3 import delete_id, execute, get_db_all
from models.user_model import User, UserRegister
from models.auth import Token

router = APIRouter()

@router.post("/token", response_model=Token, tags=['user'])
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
  '''Get a new token for a given user'''
  user = authenticate_user(form_data.username, form_data.password)
  if not user:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="Incorrect username or password",
      headers={"WWW-Authenticate": "Bearer"},
    )
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(
    data={"sub": user.username}, expires_delta=access_token_expires
  )
  return {"access_token": access_token, "token_type": "bearer"}

@router.get("/users/me", response_model=User, tags=['user'])
async def read_users_me(current_user: User = Depends(get_current_user)):
  '''Get the current user information'''
  return current_user

@router.get("/users", response_model=List[User], tags=['user'])
async def get_all_users(current_user: User = Depends(get_current_admin_user)):
  '''Get all user information '''
  users = get_db_all('SELECT id, username, email, admin, created, activity FROM users ORDER BY id ASC')
  if users is not None:
    return users
  raise HTTPException(status_code=500, detail="An error occurred. Unable to load users.")

@router.delete("/users/remove/{user_id}", tags=["user"])
async def remove_user(user_id: int, current_user: User = Depends(get_current_admin_user)):
  '''Remove a user'''
  if user_id is not None:
    if not delete_id('users', user_id):
      raise HTTPException(status_code=500, detail='Failed to delete user')
  return

@router.get("/users/me/items", tags=['user'])
async def read_own_items(current_user: User = Depends(get_current_admin_user)):
  '''Test admin route'''
  return [{"item_id": "Foo", "owner": current_user.username}]

@router.post("/register", tags=['user'])
async def register_user(user_data: UserRegister):
  '''Register a new user account'''
  res = create_user(user_data)
  if res is not None:
    return {"res": res}
  raise HTTPException(status_code=500, detail='Failed to create user')

@router.post("/user/touch", tags=['user'])
async def touch_user(current_user: User = Depends(get_current_user)):
  '''Update the user active time'''
  if current_user.username is not None:
    execute('''
      UPDATE users SET activity = ?
      WHERE username = ?
    ''', [int(datetime.utcnow().timestamp()), current_user.username])
  return
