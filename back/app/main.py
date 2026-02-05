from fastapi import FastAPI, Depends
from .database import engine
from .models import Base
from .controller.routes import auth_controller
from .config.security import get_current_user

app = FastAPI(title="To-Do API")

Base.metadata.create_all(bind=engine)

app.include_router(auth_controller.router)

@app.get("/")
def read_users_me(current_user = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email
    }