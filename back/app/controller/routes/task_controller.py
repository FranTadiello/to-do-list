from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from ...database import get_db
from ...schemas.schemas import TaskBase, TaskResponse
from ...config.security import get_current_user
from ...services.task_service import create_user_task
from ...models import User

router = APIRouter(prefix="/task", tags=["Task"])

@router.post("/create", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
def create_task(
    task: TaskBase,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return create_user_task(
        db=db,
        task=task,
        user_id=current_user.id
    )


