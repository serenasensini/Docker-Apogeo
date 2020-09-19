from typing import List, Dict
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)


def getPets() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'zoo'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM pets')
    results = [{name: pet} for (name, pet) in cursor]
    cursor.close()
    connection.close()

    return results


@app.route('/')
def index() -> str:
    return json.dumps({'my-pets': getPets()})


if __name__ == '__main__':
    app.run(host='0.0.0.0')
