from fastapi import FastAPI
from .database import engine
from .models import Base
from .routes import auth

app = FastAPI(title="To-Do API")

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "hello"}
