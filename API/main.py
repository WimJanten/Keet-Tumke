import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./key.json")

firebase_admin.initialize_app(cred)

db = firestore.client()

user_key = "12 32 43 54"

doc_ref = db.collection("drinkers").document(user_key)
doc_ref.set(
    {
        "name": "Lake",
        "pils": 1000,
    }
)

# TODO user_key = value of post request esp
# TODO pils = pils(database) + 1
