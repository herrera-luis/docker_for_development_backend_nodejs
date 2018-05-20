#!/bin/bash

set -e
docker run -it --rm --net=todos -p 3000:3000 --name todos-api -v "$PWD":/usr/src/app -w /usr/src/app -e ENV="docker" -e POSTGRES_PASSWORD="mysecretpassword" -e POSTGRES_DB="todosdb" -e POSTGRES_USER="postgres" -e POSTGRES_SERVERNAME="todos-database" node "./scripts/start_api.sh"