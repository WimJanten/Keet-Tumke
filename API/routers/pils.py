from fastapi import APIRouter, HTTPException, status

import schemas
from database import db

router = APIRouter(
    prefix="/pils",
    tags=["pils"]
)

@router.post("")
def post_pils(post : schemas.PilsPost):
    id = post.ChipID
    id.encode("utf-8")
    result = db.collection(u'drinkers').document(id).get()
    if result.exists:
            pils = result.to_dict().get("pils")
            name = result.to_dict().get("naam")
            result = db.collection(u'drinkers').document(id).update({"pils": pils + 1})
            return {f"{name} drank 1 more beer"}
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"{post.ChipID} not found")

