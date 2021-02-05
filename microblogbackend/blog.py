import json
import pickle
import datetime

from flask import Flask, app, jsonify, request, g, make_response

app = Flask(__name__)


@app.route('/notes', methods=['GET'])
def get_notes():
    with open('notes', 'rb') as notes:
        try:
            entries = pickle.load(notes)
        except (pickle.UnpicklingError, EOFError):
            entries = []
    return jsonify(entries)


@app.route('/note', methods=['PUT'])
def create_note():
    req = request.json

    if not 'title' in req.keys() or not 'comment' in req.keys():
        return make_response(('', 400, {}))

    with open('notes', 'rb') as notes:
        try:
            entries = pickle.load(notes)
            last_id = entries[-1]['id'] + 1
        except (pickle.UnpicklingError, EOFError):
            entries = []
            last_id = 1

    req['date'] = datetime.datetime.now().isoformat() 
    req['id'] = last_id

    entries.append(req)

    with open('notes', 'wb') as notes:
        pickle.dump(entries, notes)

    return  make_response(('', 200, {}))