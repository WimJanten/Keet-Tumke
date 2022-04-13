from fastapi import APIRouter, HTTPException, status
from datetime import datetime

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
    StorageResult = db.collection(u'voorraad').document(u'pilsjes').get()
    if result.exists:
            pils = result.to_dict().get("totaalpils")
            name = result.to_dict().get("naam")
            VoorraadPilsjes = StorageResult.to_dict().get("aantal")
            db.collection(u'drinkers').document(id).update({"totaalpils": pils + 1})
            db.collection(u'voorraad').document(u'pilsjes').update({"aantal": VoorraadPilsjes - 1})
            print(f"{datetime.now().month}-{ datetime.now().year}")
            return {f"{name} drank 1 more beer"}
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"{post.ChipID} not found")

