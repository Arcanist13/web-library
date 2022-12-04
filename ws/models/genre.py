from pydantic import BaseModel

class Genre(BaseModel):
  '''Book model.'''
  id:                int
  name:              str
