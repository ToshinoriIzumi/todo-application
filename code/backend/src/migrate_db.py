from sqlmodel import create_engine, SQLModel

from src.models.task import Task

DB_URL = "postgresql+psycopg2://postgres:postgres@db:5432/task_app"
engine = create_engine(DB_URL, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def reset_database():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    reset_database()
