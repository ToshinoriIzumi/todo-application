from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session

from src.models.task import TaskRead, TaskCreate, TaskDone
from src.cruds.task_crud import TaskCrud
from src.db import get_db

router = APIRouter()


@router.get("/")
async def list_tasks(db: Session = Depends(get_db)):
    return TaskCrud.search_all(db)


@router.get("/detail/{id}", response_model=TaskRead)
async def get_task(id: int, db: Session = Depends(get_db)):
    db_task = TaskCrud.search_by_id(db, id)
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@router.post("/task", response_model=TaskRead)
async def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    return TaskCrud.create(db, task)


@router.put("/task/done/{id}", response_model=TaskRead)
async def update_done(task_done: TaskDone, db: Session = Depends(get_db)):
    return TaskCrud.update_done(db, task_done)
