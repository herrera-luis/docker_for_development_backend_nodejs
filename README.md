# Api for todos made with Node.js

> *Remember to start database before api server*

## With Node

- **Install dependencies:** `$npm install`
- **Run the tests:** `$npm test`

&nbsp; ***To run the API***:
- **Start database:** You need install postgresql and create tododb database or `$./scripts/start_database.sh` to run a database with docker.
- **Run the api server:** `$npm start`

## With Host

- **Run the tests:** `$./scripts/run_unit_tests.sh`

&nbsp; ***To run the API***:
- **Start database:** You need install postgresql and create tododb database or `$./scripts/start_database.sh` to run a database with docker.
- **Start api server:** `$./scripts/start_api.sh`

## With Docker
- **Run the tests:** `$./scripts/run_unit_tests_docker.sh`

&nbsp; ***To run the API***:
- **Create network:** `$docker network create todos` 
- **Start database:** `$./scripts/start_database_docker.sh`
- **Start api server:** `$./scripts/start_api_docker.sh`

Author: Cristian Toaquiza