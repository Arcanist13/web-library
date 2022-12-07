from os import environ
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import users, books, lists

app = FastAPI()

app.include_router(users.router)
app.include_router(books.router)
app.include_router(lists.router)

# Setup CORS
origins = [
  "https://library.thearcanerepository.com",
  "https://www.library.thearcanerepository.com"
]
if environ['LIBRARY_WS_DEV']:
  origins= ["*"]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)
