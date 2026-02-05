from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from ...database import get_db
from ...schemas.schemas import TaskBase, TaskResponse, TaskUpdate
from ...config.security import get_current_user
from ...services.task_service import create_user_task, list_user_tasks, update_user_task, delete_user_task
from ...models import User

router = APIRouter(prefix="/task", tags=["Task"])

@router.get("/", response_model=List[TaskResponse])
def get_tasks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return list_user_tasks(
        db=db,
        user_id=current_user.id
    )


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


@router.patch("/{task_id}", response_model=TaskResponse)
def update_task(
    task_id: int,
    task_data: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return update_user_task(
        db=db,
        task_id=task_id,
        user_id=current_user.id,
        task_data=task_data
    )
    
    
@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    delete_user_task(
        db=db,
        task_id=task_id,
        user_id=current_user.id
    )