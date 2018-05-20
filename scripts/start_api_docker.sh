#!/bin/bash

set -e
docker run -it --rm --net=todos -p 3000:3000 --name todos-api -v "$PWD":/usr/src/app -w /usr/src/app -e ENV="docker" node "./scripts/start_api.sh"