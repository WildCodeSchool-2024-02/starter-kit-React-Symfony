PHP_CONT = docker compose exec php
YARN_CONT = docker compose exec node

run-dev: 
	HTTP_PORT=8000 docker compose up --pull always -d --wait

logs-dev:
	docker compose logs -f	

stop-dev: 
	docker compose down --remove-orphans

migration-items: 
	docker compose exec php php bin/console d:m:m
	docker compose exec php php bin/console d:f:l

bash: 
	@$(PHP_CONT) bash

yarn: 
	@$(YARN_CONT) ash
