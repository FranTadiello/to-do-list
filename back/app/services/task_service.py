from sqlalchemy.orm import Session
from ..schemas.schemas import TaskBase
from ..repositories.task_repository import create_task
from ..models import Task

def create_user_task(
    db: Session,
    task: TaskBase,
    user_id: int
) -> Task:

    return create_task(db=db, task=task, user_id=user_id)