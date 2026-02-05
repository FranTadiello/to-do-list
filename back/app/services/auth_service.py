from datetime import timedelta
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from ..config.security import hash_password, verify_password, create_access_token
from ..schemas import schemas
from ..repositories import auth_repository

ACCESS_TOKEN_EXPIRE_MINUTES = 60

def register_user(user: schemas.UserCreate, db: Session):
    existing_user = auth_repository.get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email já cadastrado"
        )

    hashed_pw = hash_password(user.password)
    return auth_repository.create_user(db, user.email, hashed_pw)


def login_user(form_data, db: Session):
    user = auth_repository.get_user_by_email(db, form_data.username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email nao cadastrado"
        )
    if not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Senha inválida"
        )

    access_token = create_access_token(
        data={"sub": str(user.id)},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    return {"access_token": access_token, "token_type": "bearer"}
