from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from enum import Enum

class TaskStatus(str, Enum):
    pendente = "pendente"
    em_andamento = "em andamento"
    concluida = "concluida"
    
class UserCreate(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    email: EmailStr

    class Config:
        from_attributes = True


class TaskBase(BaseModel):
    titulo: str
    descricao: str | None = None
    status: TaskStatus = TaskStatus.pendente


class TaskResponse(TaskBase):
    id: int
    data_criacao: datetime

    class Config:
        from_attributes = True
        
class TaskUpdate(BaseModel):
    titulo: Optional[str] = None
    descricao: Optional[str] = None
    status: Optional[TaskStatus] = None
