'''Authentication helper methods'''

from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
  '''Verify if a plain text password matches a hashed password'''
  return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
  '''Return the hashed password of a plain text password'''
  return pwd_context.hash(password)
