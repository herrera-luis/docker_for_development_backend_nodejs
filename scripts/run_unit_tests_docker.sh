#!/bin/bash

set -e
docker run -it --rm --name api-unit-tests -v "$PWD":/usr/src/app -w /usr/src/app node sh "./scripts/run_unit_tests.sh"