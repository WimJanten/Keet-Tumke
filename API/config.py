from pydantic import BaseSettings, Json

class Settings(BaseSettings):
    KEY: Json

    class Config:
        env_file = ".env"

settings = Settings()