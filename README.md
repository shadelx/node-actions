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

## Define environments KEYS

You need to define the different environments variables in a .env file accordantly

- .env.development
- .env.production
- .env.test

```bash

PORT=3000
NODE_ENV=development
MESSAGE="Hello from Development"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify it according to your specific setup!
