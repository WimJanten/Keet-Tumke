from fastapi import APIRouter

import schemas

router = APIRouter(
    prefix="/pils",
    tags=["pils"]
)

@router.post("")
def post_pils(post : schemas.PilsPost):
     return {post.ChipID}