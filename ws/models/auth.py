'''Authentication models'''

from typing import Optional
from pydantic import BaseModel

class TokenData(BaseModel):
  '''Token payload'''
  username: Optional[str] = None

class Token(BaseModel):
  '''Token information'''
  access_token: str
  token_type: str
