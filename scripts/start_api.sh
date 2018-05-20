#!/bin/bash

set -e
npm install
if [ "$ENV" == "docker" ]
then
    echo "Running API with docker"
else
    echo "Running API locally"
fi
npm start