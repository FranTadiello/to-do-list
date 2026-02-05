from pydantic import BaseModel, EmailStr
from datetime import datetime

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
    status: str | None = "pendente"


class TaskResponse(TaskBase):
    id: int
    data_criacao: datetime

    class Config:
        from_attributes = True
