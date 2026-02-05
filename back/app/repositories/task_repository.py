from sqlalchemy.orm import Session
from ..models import Task
from ..schemas.schemas import TaskBase

def create_task(db: Session, task: TaskBase,user_id: int) -> Task:
    db_task = Task(
        titulo=task.titulo,
        descricao=task.descricao,
        status=task.status,
        user_id=user_id
    )
    
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task
