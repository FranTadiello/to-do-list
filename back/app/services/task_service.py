from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from ..schemas.schemas import TaskBase, TaskUpdate
from ..repositories.task_repository import create_task, get_tasks_by_user, get_task_by_id_and_user, update_task
from ..models import Task

def create_user_task(
    db: Session,
    task: TaskBase,
    user_id: int
) -> Task:
    return create_task(db=db, task=task, user_id=user_id)

def list_user_tasks(
    db: Session,
    user_id: int
) -> list[Task]:
    return get_tasks_by_user(db=db, user_id=user_id)

def update_user_task(
    db: Session,
    task_id: int,
    user_id: int,
    task_data: TaskUpdate
):
    task = get_task_by_id_and_user(db, task_id, user_id)

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )

    return update_task(db, task, task_data)