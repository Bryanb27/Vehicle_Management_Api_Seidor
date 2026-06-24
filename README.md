# Vehicle Management API - Seidor Technical Challenge

REST API developed with Node.js, TypeScript and Express for managing vehicles, drivers and vehicle usage records.

## Features

### Vehicles

* Create a vehicle
* Update a vehicle
* Delete a vehicle
* Get vehicle by ID
* List vehicles
* Filter vehicles by color
* Filter vehicles by brand

### Drivers

* Create a driver
* Update a driver
* Delete a driver
* Get driver by ID
* List drivers
* Filter drivers by name

### Vehicle Usage

* Start vehicle usage
* Finish vehicle usage
* List all vehicle usage records
* Show driver and vehicle information in usage records

## Business Rules

* A vehicle can only be used by one driver at a time.
* A driver already using a vehicle cannot use another vehicle simultaneously.

## Technologies

* Node.js
* TypeScript
* Express
* Jest
* Supertest
* UUID

## Live Demo

Base URL:

https://your-render-url.onrender.com

The API is deployed and can be tested using Postman or any HTTP client.

Note: This project uses in-memory persistence, so all data will be reset when the server restarts (e.g., Render redeploys or idle restart).

### Example Endpoints

#### Cars
- GET /cars
- POST /cars
- GET /cars?color=Black&brand=Toyota

#### Drivers
- GET /drivers
- POST /drivers
- GET /drivers?name=Bryan

#### Vehicle Usage
- GET /usages
- POST /usages
- PATCH /usages/:id/finish

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

## Running the Application

Development mode:

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:3000
```

## Running Tests

```bash
npm test
```

## API Endpoints

### Vehicles

| Method | Endpoint  |
| ------ | --------- |
| POST   | /cars     |
| GET    | /cars     |
| GET    | /cars/:id |
| PUT    | /cars/:id |
| DELETE | /cars/:id |

### Drivers

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /drivers     |
| GET    | /drivers     |
| GET    | /drivers/:id |
| PUT    | /drivers/:id |
| DELETE | /drivers/:id |

### Vehicle Usage

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /usages            |
| PATCH  | /usages/:id/finish |
| GET    | /usages            |

## Tests

The project includes:

* Unit tests for services
* Integration tests for API endpoints
* Business rule validation tests

## Project Structure

```text
src
├── controllers
├── services
├── repositories
├── routes
├── models
├── middlewares
├── tests
├── container.ts
├── app.ts
└── server.ts
```

### Architecture

The application follows a layered architecture:

```text
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
In-Memory Storage
```

#### Responsibilities

* **Routes**: endpoint definitions.
* **Controllers**: handle HTTP requests and responses.
* **Services**: implement business rules and application logic.
* **Repositories**: manage in-memory data persistence.
* **Models**: define application entities.
* **Middlewares**: centralized error handling and request processing.
* **Tests**: unit and integration tests.