## **Setup Instructions**

### **Prerequisites**

Make sure you have the following installed before starting:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (a JavaScript package manager)

### **Installation**

1. **Get the Project Code**

   If you're using Git:

   ```bash
   git clone <repository-url>
   cd heroku-demo
   ```

2. **Install the Required Packages**

   Run:

   ```bash
   npm install
   ```

3. **Verify Cypress Installation**

   Check that Cypress is correctly set up:

   ```bash
   npx cypress verify
   ```

## **Running Tests**

### **Interactive Mode** (Cypress GUI)

To open the Cypress Test Runner in a GUI:

```bash
npm run cy:open
```

### **Headless Mode** (Command Line)

To run all tests without opening the GUI:

```bash
npm test
```

#### **Run Tests in Specific Browsers**

- Chrome:

  ```bash
  npm run test:chrome
  ```

- Firefox:

  ```bash
  npm run test:firefox
  ```

#### **Run Only Login Tests**

```bash
npm run test:login
```

### **Specific Test Execution**

- Run a specific test file:

  ```bash
  npm run cy:run:spec "cypress/e2e/login.cy.js"
  ```

- Run using a specific browser:

  ```bash
  npm run cy:run:chrome
  npm run cy:run:firefox
  ```

- Run with debug logs enabled:

  ```bash
  DEBUG=cypress:* npm test
  ```

Brief explanation about framework choice:

# Cypress:

Modern JavaScript framework with excellent developer experience
Built-in waiting and retry logic eliminates flaky tests
Real-time debugging and visual test execution
No additional driver setup required

# Page Object Model:

Industry standard for maintainable test automation
Separates test logic from Actual tests
Makes tests readable and business-focused
Simplifies maintenance when UI changes
