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
make migrations-items
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

## Features

-   Production, development and CI ready
-   Just 1 service by default
-   Blazing-fast performance thanks to [the worker mode of FrankenPHP](https://github.com/dunglas/frankenphp/blob/main/docs/worker.md) (automatically enabled in prod mode)
-   [Installation of extra Docker Compose services](docs/extra-services.md) with Symfony Flex
-   Automatic HTTPS (in dev and prod)
-   HTTP/3 and [Early Hints](https://symfony.com/blog/new-in-symfony-6-3-early-hints) support
-   Real-time messaging thanks to a built-in [Mercure hub](https://symfony.com/doc/current/mercure.html)
-   [Vulcain](https://vulcain.rocks) support
-   Native [XDebug](docs/xdebug.md) integration
-   Super-readable configuration

**Enjoy!**

## Docs

1. [Options available](docs/options.md)
2. [Using Symfony Docker with an existing project](docs/existing-project.md)
3. [Support for extra services](docs/extra-services.md)
4. [Deploying in production](docs/production.md)
5. [Debugging with Xdebug](docs/xdebug.md)
6. [TLS Certificates](docs/tls.md)
7. [Using MySQL instead of PostgreSQL](docs/mysql.md)
8. [Using Alpine Linux instead of Debian](docs/alpine.md)
9. [Using a Makefile](docs/makefile.md)
10. [Updating the template](docs/updating.md)
11. [Troubleshooting](docs/troubleshooting.md)