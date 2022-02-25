# Docker Compose con Node.js e Mongo

## Descrizione
Questo esempio va a creare una semplice REST API che implementa delle operazione CRUD su un oggetto chiamato 
_request_. 

Le request possono essere eseguite sulla porta 8081.

* GET `/api/requests`
* POST `/api/requests`
* GET `/api/requests/:id`
* PUT `/api/requests/:id`
* DELETE `/api/requests/:id`

## Avvio

Eseguire il comando:

`docker-compose up`
