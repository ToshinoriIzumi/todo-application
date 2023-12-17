from datetime import datetime
from sqlmodel import Session, select

from src.models.task import TaskCreate, TaskRead, Task, TaskDone


class TaskCrud:
    @classmethod
    def search_all(cls, db: Session) -> list[TaskRead]:
        result = db.exec(
            select(Task).order_by(Task.id))
        return result.all()

    @classmethod
    def search_by_id(cls, db: Session, task_id: int) -> TaskRead:
        result = db.exec(
            select(Task).where(Task.id == task_id))
        return result.first()

    @classmethod
    def create(cls, db: Session, task: TaskCreate) -> TaskRead:
        db_task = Task.model_validate(task)
        db.add(db_task)
        db.commit()
        db.refresh(db_task)
        return db_task

    @classmethod
    def update_done(cls, db: Session, task_done: TaskDone) -> TaskRead:
        db_task = cls.search_by_id(db, task_done.id)
        db_task.done = task_done.done
        db.commit()
        db.refresh(db_task)
        return db_task

    @classmethod
    def update(cls, db: Session, id: int, task: TaskCreate) -> TaskRead:
        db_task = cls.search_by_id(db, id)
        db_task.title = task.title
        db_task.description = task.description
        db_task.updated_at = datetime.now()
        db.commit()
        db.refresh(db_task)
        return db_task

    @classmethod
    def delete(cls, db: Session, id: int) -> bool:
        db_task = cls.search_by_id(db, id)
        db.delete(db_task)
        db.commit()
        return True
