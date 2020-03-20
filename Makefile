SHELL := /bin/bash # Use bash syntax

run:
	docker-compose run --service-ports --rm web

stop:
	docker-compose stop

clean:
	docker-compose down
	docker rmi node-dashboard

build:
	docker-compose build

default: run
