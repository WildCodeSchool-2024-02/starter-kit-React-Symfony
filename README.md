# Starter Kit Symfony React

## Prerequisites

-   Ensure Docker is installed.
-   If not already done, [install Docker Compose](https://docs.docker.com/compose/install/) (v2.10+).

## Installation

1. Clone this project.

## Working

### Running the App in Watch Mode

To run the application in watch mode:

```bash
make run-dev
```

In parallel, follow log output with:

```bash
make logs-dev
```

### Accessing the App

Open `http://localhost:8000` in your favorite web browser and [accept the auto-generated TLS certificate](https://stackoverflow.com/a/15076602/1352334)

### Stopping the Docker Containers

To stop the docker containers :

```bash
make stop-dev
```

## Database

### Running migration + fixtures for entity Item

To start migration and load fixtures for the entity Item:

```bash
make migration-items
```

Open phpMyAdmin :
http://localhost:8080/

## Container Access

### Accessing the Bash in the PHP Container

```bash
make bash
```

### Accessing the Ash in the Node container

```bash
make yarn
```

**Enjoy!**

## Docs

1. [Options available](docs/options.md)
2. [Support for extra services](docs/extra-services.md)
3. [Deploying in production](docs/production.md)
4. [Debugging with Xdebug](docs/xdebug.md)
5. [TLS Certificates](docs/tls.md)
6. [Using MySQL instead of PostgreSQL](docs/mysql.md)
7. [Using Alpine Linux instead of Debian](docs/alpine.md)
8. [Using a Makefile](docs/makefile.md)
9. [Updating the template](docs/updating.md)
10. [Troubleshooting](docs/troubleshooting.md)
