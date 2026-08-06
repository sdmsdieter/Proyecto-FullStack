from fastapi import APIRouter
from app.services.firebase import db

router = APIRouter(prefix="/api/projects", tags=["projects"])

@router.get("/test")
def test_firestore():
    docs = db.collection("projects").stream()

    projects = []

    for doc in docs:
        item = doc.to_dict()
        item["id"] = doc.id
        projects.append(item)

    return projects