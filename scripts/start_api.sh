#!/bin/bash

set -e
npm install
if [ "$ENV" == "docker" ]
then
    echo "Running API with docker"
else
    echo "Running API locally"
fi
export POSTGRES_PASSWORD="mysecretpassword"
export POSTGRES_DB="todosdb"
export sPOSTGRES_USER="postgres"
npm start