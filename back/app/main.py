from fastapi import FastAPI, Depends
from .database import engine
from .models import Base
from .controller.routes import auth_controller
from .controller.routes import task_controller
from .config.security import get_current_user
from .config.cors import setup_cors

app = FastAPI(title="To-Do API")

setup_cors(app)

Base.metadata.create_all(bind=engine)

app.include_router(auth_controller.router)
app.include_router(task_controller.router)

@app.get("/")
def read_users_me(current_user = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email
    }
    