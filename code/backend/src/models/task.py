from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class TaskBase(SQLModel):
    title: str
    description: str = None


class Task(TaskBase, table=True):
    __tablename__ = "Tasks"
    id: Optional[int] = Field(default=None, primary_key=True)
    done: bool = Field(default=False)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):
    id: int
    done: bool
    created_at: datetime
    updated_at: datetime


class TaskDone(SQLModel):
    id: int
    done: bool
