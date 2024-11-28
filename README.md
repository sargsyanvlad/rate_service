# Rate Service

## Description
Rate Service is a microservice built with NestJS that provides various functionalities related to rating services. It is containerized using Docker and can be easily deployed and managed.

## Prerequisites
- Node.js v20.x
- Docker
- npm

## Environment Variables

The service uses environment variables to configure various settings. Below is a list of the environment variables used in the project:

- `HTTP_PORT`: The port on which the service will run (default: 3000).
- `RATE__UPDATE_FREQUENCY`: The frequency (in milliseconds) at which the rate updates (default: 10000).
- `RATE__COMMISSION`: The commission rate applied to the transactions (default: 0.0001).
- `RATE__BINANCE_API_URL`: The URL for the Binance API to fetch the BTC/USDT ticker (default: `https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT`).

Create a `.env` file in the root directory of the project and add the following content:

```dotenv
HTTP_PORT=3000
RATE__UPDATE_FREQUENCY=10000
RATE__COMMISSION=0.0001
RATE__BINANCE_API_URL=https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT
```

Make sure to update the values as per your requirements.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sargsyanvlad/rate_service.git
   cd rate_service
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Service

### Using Docker

1. Build and run the Docker container:
   ```sh
   docker-compose up --build
   ```

2. The service will be available at `http://localhost:3000`.

## Swagger Documentation

The service uses Swagger for API documentation. Swagger provides a user-friendly interface to explore and test the API endpoints.

### Accessing Swagger UI

Once the service is running, you can access the Swagger UI at the following URL:
```
http://localhost:3000/docs
```

### Without Docker

1. Build the project:
   ```sh
   npm run build
   ```

2. Start the service:
   ```sh
   npm run start
   ```

3. The service will be available at `http://localhost:3000`.

## Scripts

- `npm run build`: Build the project using NestJS.
- `npm run start`: Start the service.
- `npm run start:dev`: Start the service in development mode with hot-reloading.
- `npm run start:debug`: Start the service in debug mode.
- `npm run start:prod`: Start the service in production mode.
- `npm run lint`: Lint the codebase using ESLint.
- `npm run test`: Run unit tests using Jest.
- `npm run test:watch`: Run unit tests in watch mode.
- `npm run test:cov`: Run unit tests and generate coverage reports.
- `npm run test:debug`: Run unit tests in debug mode.
- `npm run test:e2e`: Run end-to-end tests.

## Testing

To run the tests, use the following command:
```sh
npm run test
```

## License

This project is licensed under the UNLICENSED License.
