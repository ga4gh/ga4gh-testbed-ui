VERSION := $(shell cat package.json | grep version | head -1 | rev | cut -f 1 -d ' ' | rev | sed -e s:[,\"]::g)

Nothing:
	@echo "No target provided. Stop"

.PHONY: docker-build
docker-build:
	docker build -f Dockerfile -t ga4gh/ga4gh-testbed-ui:${VERSION} .

.PHONY: connect-april-2022-demo-up
connect-april-2022-demo-up:
	docker-compose -f docker-compose-connect.yml up -d

.PHONY: connect-april-2022-demo-down
connect-april-2022-demo-down:
	docker-compose -f docker-compose-connect.yml down
