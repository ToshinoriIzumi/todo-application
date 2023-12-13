from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class TodoBase(SQLModel):
    title: str
    description: str = None


class Todo(TodoBase, table=True):
    __tablename__ = "todos"
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())


class TodoCreate(TodoBase):
    pass


class TodoRead(TodoBase):
    id: int
    created_at: datetime
    updated_at: datetime
