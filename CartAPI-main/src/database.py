from pymongo import MongoClient
import certifi


MONGO_URI='mongodb+srv://rivaslina:rQbnSMvYNaSey0Ia@lawatty.rtzdvdd.mongodb.net/tickify?retryWrites=true&w=majority'

ca = certifi.where()

def dbConnection():
    try:
        client = MongoClient(MONGO_URI,tlsCAFile=ca)
        db= client["CarritoDB"]
    except ConnectionError:
        print('Error')
    return db