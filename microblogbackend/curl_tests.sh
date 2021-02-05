curl "http://127.0.0.1:5000/notes"

curl -X PUT -H "Content-Type: application/json" -d '{"comment":"test54345341", "title": "test2233"}' "http://127.0.0.1:5000/note"
curl -X PUT -H "Content-Type: application/json" -d '{"comment":"test54345341", "title": "test2233"}' "http://127.0.0.1:5000/note"

curl "http://127.0.0.1:5000/notes"