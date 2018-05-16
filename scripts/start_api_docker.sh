#!/bin/bash

set -e
docker run -it --rm --net=todos -p 3000:3000 --name todos-api -v "$PWD":/usr/src/app -w /usr/src/app node sh "./scripts/start_api.sh"