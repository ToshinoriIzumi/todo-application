from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session

from src.models.todo import TodoRead, TodoCreate, TodoDone
from src.cruds.todo_crud import TodoCrud
from src.db import get_db

router = APIRouter()


@router.get("/")
async def list_tasks(db: Session = Depends(get_db)):
    return TodoCrud.search_all(db)


@router.post("/post", response_model=TodoRead)
async def create_task(todo: TodoCreate, db: Session = Depends(get_db)):
    return TodoCrud.create(db, todo)


@router.put("/post/done/{id}", response_model=TodoRead)
async def update_done(todo_done: TodoDone, db: Session = Depends(get_db)):
    return TodoCrud.update_done(db, todo_done)
