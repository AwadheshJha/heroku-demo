## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

   # If using git

   git clone <repository-url>
   cd heroku-demo

2. **Install dependencies**
   npm install

3. **Verify installation**
   npx cypress verify

## Running Tests

### Interactive Mode (Cypress Test Runner)

# Open Cypress Test Runner GUI

npm run cy:open

### Headless Mode (Command Line)

npm test

# Run tests in Chrome browser

npm run test:chrome

# Run tests in Firefox browser

npm run test:firefox

# Run only login tests

npm run test:login

### Specific Test Execution

# Run a specific test file

npm run cy:run:spec "cypress/e2e/login.cy.js"

# Run with specific browser

npm run cy:run:chrome
npm run cy:run:firefox

# Run with debug output

DEBUG=cypress:\* npm test
