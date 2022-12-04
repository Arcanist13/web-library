from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import users, books, genres

app = FastAPI()

app.include_router(users.router)
app.include_router(books.router)
app.include_router(genres.router)

# Setup CORS
origins = [
  "https://library.thearcanerepository.com",
  "https://www.library.thearcanerepository.com",
  "http://192.168.2.3:4200",
  "http://localhost:4200"
]
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)
