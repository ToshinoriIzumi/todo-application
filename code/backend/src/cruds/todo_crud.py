
from sqlmodel import Session, select

from src.models.todo import TodoCreate, TodoRead, Todo


class TodoCrud:
    @classmethod
    def search_all(cls, db: Session) -> list[TodoRead]:
        result = db.exec(
            select(Todo).order_by(Todo.id))
        return result.all()

    @classmethod
    def create(cls, db: Session, todo: TodoCreate) -> TodoRead:
        db_todo = Todo.model_validate(todo)
        db.add(db_todo)
        db.commit()
        db.refresh(db_todo)
        return db_todo
