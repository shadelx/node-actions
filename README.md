# Simple Express.js Server with Jest and GitHub Actions CI/CD

This is a simple Express.js server that responds with a "Hello World" message. It includes basic unit tests using Jest and CI/CD pipeline implementation using GitHub Actions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Unit Tests](#unit-tests)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [License](#license)

## Installation

To get started with this project, you need Node.js and npm installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-express-server.git
   cd simple-express-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. To start the server, run the following command:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000`, and you should see the "Hello World" message when you visit the endpoint.

2. To run the unit tests:

   ```bash
   npm test
   ```

   This will run Jest tests to ensure the server is working as expected.

## Unit Tests

The server includes basic unit tests to check that the `/` endpoint is functioning correctly.

1. The `tests` directory contains the `app.test.js` file with simple tests for the server.
2. Jest is configured to run the tests when executing `npm test`.

```js
// app.test.js
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it('should return "Hello World"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
```

## CI/CD with GitHub Actions

This repository includes a basic GitHub Actions workflow that runs unit tests and deploys the server on every push to the `main` branch.

### Workflow Configuration

The workflow file `.github/workflows/ci-cd.yml` is configured to:

1. Install dependencies.
2. Run unit tests using Jest.
3. Deploy the server (for example, to Heroku, AWS, or any cloud service).

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      # Add deployment steps here (e.g., deploy to Heroku)
```

### Deployment

Once the tests pass, the GitHub Actions workflow can be extended to deploy the server to your desired environment. For example, you can add a deployment step to push the code to Heroku or AWS.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify it according to your specific setup!
