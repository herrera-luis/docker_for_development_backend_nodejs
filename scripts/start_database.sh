#!/bin/bash

set -e
docker run --rm --net=todos --name todos-database -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=todosdb postgres