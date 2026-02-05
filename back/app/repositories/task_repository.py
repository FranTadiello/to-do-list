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


def get_tasks_by_user(
    db: Session,
    user_id: int
) -> list[Task]:
    return (
        db.query(Task)
        .filter(Task.user_id == user_id)
        .order_by(Task.data_criacao.desc())
        .all()
    )
    
    
def get_task_by_id_and_user(
    db: Session,
    task_id: int,
    user_id: int
) -> Task | None:
    return (
        db.query(Task)
        .filter(Task.id == task_id, Task.user_id == user_id)
        .first()
    )
    
    
def update_task(
    db: Session,
    task: Task,
    task_data
) -> Task:
    for field, value in task_data.dict(exclude_unset=True).items():
        setattr(task, field, value)

    db.commit()
    db.refresh(task)
    return task


def delete_task(db: Session, task: Task) -> None:
    db.delete(task)
    db.commit()