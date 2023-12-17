from sqlmodel import create_engine, Session

DB_URL = "postgresql+psycopg2://postgres:postgres@db:5432/task_app"
engine = create_engine(DB_URL, echo=True)


def get_db():
    with Session(engine) as db:
        yield db
