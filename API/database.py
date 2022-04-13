from warnings import catch_warnings
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


try:
    cred = credentials.Certificate("./key.json")
except ValueError:
    print("Invalid Value at database credentials")
except IOError:
    print("Invalid Value at database file")

firebase_admin.initialize_app(cred)

db = firestore.client()
