
from sqlmodel import Session, select

from src.models.todo import TodoCreate, TodoRead, Todo, TodoDone


class TodoCrud:
    @classmethod
    def search_all(cls, db: Session) -> list[TodoRead]:
        result = db.exec(
            select(Todo).order_by(Todo.id))
        return result.all()

    @classmethod
    def search_by_id(cls, db: Session, todo_id: int) -> TodoRead:
        result = db.exec(
            select(Todo).where(Todo.id == todo_id))
        return result.first()

    @classmethod
    def create(cls, db: Session, todo: TodoCreate) -> TodoRead:
        db_todo = Todo.model_validate(todo)
        db.add(db_todo)
        db.commit()
        db.refresh(db_todo)
        return db_todo

    @classmethod
    def update_done(cls, db: Session, todo_done: TodoDone) -> TodoRead:
        db_todo = cls.search_by_id(db, todo_done.id)
        db_todo.done = todo_done.done
        db.commit()
        db.refresh(db_todo)
        return db_todo
