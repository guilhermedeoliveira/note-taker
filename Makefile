SHELL := /bin/bash # Use bash syntax

up:
	docker-compose up -d

run:
	docker-compose run --service-ports --rm --name note-taker-app app

in:
	docker exec -it $(shell docker-compose ps | grep apoie-o-local_db | cut -d" " -f 1) /bin/bash

down:
	docker-compose down

clean:
	docker-compose down
	docker rmi apoie-o-local

build:
	docker-compose build

ci-setup:
	./scripts/ci-setup.sh

ci-qa:
	./scripts/ci-qa.sh

default: run
