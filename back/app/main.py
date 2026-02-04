from fastapi import FastAPI
from .database import engine
from .models import Base

app = FastAPI(title="To-Do API")

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "hello"}
