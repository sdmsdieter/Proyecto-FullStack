from fastapi import APIRouter, HTTPException
from app.services.firebase import db

router = APIRouter(prefix="/api/projects", tags=["projects"])

@router.get("/")
def get_projects():
    docs = db.collection("projects").stream() 
    #En esta linea se obtiene la referencia a la colección "projects" y 
    # se llama al método stream() para obtener un generador de documentos. 
    # Cada documento representa un proyecto almacenado en la base de datos de Firebase.

    projects = []

    for doc in docs:
        data = doc.to_dict()
        data["id"] = doc.id
        projects.append(data)

    return projects

@router.get("/{project_id}")
def get_project(project_id: str):
    doc = db.collection("projects").document(project_id).get()

    if not doc.exists:
        raise HTTPException(status_code=404, detail="Project not found")

    data = doc.to_dict()
    data["id"] = doc.id
    return data

@router.get("/debug/ids")
def debug_ids():
    docs = db.collection("projects").stream()
    return [doc.id for doc in docs]