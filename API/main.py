from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import pils


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
)

app.include_router(pils.router)


@app.get("/")
async def root():
    return {"Heerlijk pilsje"}
