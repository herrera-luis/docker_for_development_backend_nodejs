#!/bin/bash

set -e
docker run --rm --net=host -p 5432:5432 --name todos-database -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=todosdb postgres