from fastapi import APIRouter, HTTPException

router = APIRouter()


@router.get("/")
async def list_tasks():
    return [
        {"id": 1, "title": "Buy milk", "description": "Go to the store and buy milk"},
        {"id": 2, "title": "Sleep", "description": "Go to bed before 12 PM"},
        {"id": 3, "title": "Work", "description": "Do some work"},
    ]
