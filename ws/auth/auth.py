'''Authentication module managing OAuth authentication and verification'''

from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from jose import JWTError, jwt

from database.user import get_db_user
from models.user_model import User, UserInDB
from models.auth import TokenData
from auth.secrets import SECRET_KEY

from .auth_helpers import verify_password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30 * 24 * 60 #30d timeout

def get_user(username: str):
  '''Get the user object from the database'''
  db_user = get_db_user(username)
  if db_user is not None:
    return UserInDB(**db_user)
  return None

def authenticate_user(username: str, password: str):
  '''Get the user information and check if their password authenticates'''
  user = get_user(username)
  if not user:
    return False
  if not verify_password(password, user.hashed_password):
    return False
  return user

async def get_current_user(token: str = Depends(oauth2_scheme)):
  '''Get the current user based on the token'''
  credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
  )
  try:
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username: str = payload.get("sub")
    if username is None:
      raise credentials_exception
    token_data = TokenData(username=username)
  except JWTError as exp:
    raise HTTPException(
      status_code=status.HTTP_403_FORBIDDEN,
      detail="Could not validate credentials"
    )
  user = get_user(username=token_data.username)
  if user is None:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="Could not find user"
    )
  return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
  '''Create a new token'''
  to_encode = data.copy()
  if expires_delta:
    expire = datetime.utcnow() + expires_delta
  else:
    expire = datetime.utcnow() + timedelta(minutes=30)
  to_encode.update({"exp": expire})
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt

async def get_current_admin_user(current_user: User = Depends(get_current_user)):
  '''Check if the current user is an admin'''
  if not current_user.admin:
    raise HTTPException(status_code=401, detail="Unauthorised access")
  return current_user
