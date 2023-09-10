from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB = open('db.json')
QUOTES = json.load(DB)

@app.get('/quotes')
async def getQuotes():
    return {'data': QUOTES['quotes']}

@app.get('/qoutes/id/{id}')
async def getSingleQoute(id: int):
    return {'data': QUOTES['quotes'][id]}

@app.get('/quotes/{author}')
async def getQuotesByAuthor(author: str):
    fetchedAuthor = author.replace('+', ' ')
    authorQuotes = []
    for item in QUOTES['quotes']:
        if item['author'] == fetchedAuthor:
            authorQuotes.append(item)
    return {'data': authorQuotes}

@app.get('/quotes/length')
async def getAmountOfQuotes():
    return {'length': len(QUOTES['quotes'])}

