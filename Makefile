SHELL := /bin/bash # Use bash syntax

up:
	docker-compose up -d

in:
	docker exec -it $(shell docker-compose ps | grep apoie-o-local_db | cut -d" " -f 1) /bin/bash

down:
	docker-compose down

clean:
	docker-compose down
	docker rmi apoie-o-local

build:
	docker-compose build

default: run
