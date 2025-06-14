import LoginPage from "../pages/LoginPage";
import { invalidCredentials, expectedMessages } from "../testData/consts";

// Login Functionality Test Suite

describe("Login Functionality", () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.visit();

    // Verify the correct page
    loginPage.pageTitle.should("contain", "Login Page");
  });

  it("should successfully login with valid credentials", () => {
    loginPage.login(Cypress.env("username"), Cypress.env("password"));

    // Test Case 1: Verify successful login
    loginPage.verifySuccessfulLogin();
    loginPage.verifySuccessMessage(expectedMessages.successLogin);

    loginPage.logoutButton.should("be.visible").and("contain", "Logout");
  });

  // Test Case 2: Failed login with invalid username
  it("should fail to login with invalid username", () => {
    // Attempt login with invalid username but valid password
    loginPage.login(invalidCredentials.wrongUsername, Cypress.env("password"));

    // Verify login failure
    loginPage.verifyFailedLogin();
    loginPage.verifyErrorMessage(expectedMessages.invalidUsername);

    // Verify form is still accessible for retry
    loginPage.usernameInput.should("be.visible");
    loginPage.passwordInput.should("be.visible");
    loginPage.loginButton.should("be.visible");
  });

  //Test Case 3: Failed login with invalid password

  it("should fail to login with invalid password", () => {
    // Attempt login with valid username but invalid password
    loginPage.login(Cypress.env("username"), invalidCredentials.wrongPassword);

    // Verify login failure
    loginPage.verifyFailedLogin();
    loginPage.verifyErrorMessage(expectedMessages.invalidPassword);

    // Verify form is still accessible for retry
    loginPage.usernameInput.should("be.visible");
    loginPage.passwordInput.should("be.visible");
    loginPage.loginButton.should("be.visible");
  });

  // Test Case 4: Failed login with empty username

  it("should fail to login with empty username", () => {
    // Attempt login with empty username
    loginPage.enterPassword(Cypress.env("password"));
    loginPage.loginButton.click();

    // Verify login failure
    loginPage.verifyFailedLogin();
    loginPage.verifyErrorMessage(expectedMessages.invalidUsername);
  });

  // Test Case 5: Failed login with empty password
  it("should fail to login with empty password", () => {
    // Attempt login with empty password
    loginPage.enterUsername(Cypress.env("username"));
    loginPage.loginButton.click();

    // Verify login failure
    loginPage.verifyFailedLogin();
    loginPage.verifyErrorMessage(expectedMessages.invalidPassword);
  });

  // Test Case 6: Failed login with both fields empty

  it("should fail to login with empty credentials", () => {
    // Attempt login with both fields empty
    loginPage.loginButton.click(); // Click login without entering credentials

    // Verify login failure
    loginPage.verifyFailedLogin();
    loginPage.verifyErrorMessage(expectedMessages.invalidUsername);
  });

  // Test Case 7: Verify form elements are present and functional

  it("should have all required form elements present", () => {
    // Verify all form elements are visible and interactable
    loginPage.usernameInput.should("be.visible").and("not.be.disabled");
    loginPage.passwordInput.should("be.visible").and("not.be.disabled");
    loginPage.loginButton
      .should("be.visible")
      .and("not.be.disabled")
      .and("contain", "Login");

    // Verify input placeholders or labels
    loginPage.usernameInput.should("have.attr", "name", "username");
    loginPage.passwordInput
      .should("have.attr", "name", "password")
      .and("have.attr", "type", "password");
  });

  // Test Case 8: Verify error message disappears after successful login

  it("should clear error messages after successful login", () => {
    // First, trigger an error
    loginPage.login(invalidCredentials.wrongUsername, Cypress.env("password"));
    loginPage.verifyErrorMessage(expectedMessages.invalidUsername);

    // Navigate back to login page
    loginPage.visit();

    // Then perform successful login
    loginPage.login(Cypress.env("username"), Cypress.env("password"));

    // Verify success
    loginPage.verifySuccessfulLogin();
    loginPage.verifySuccessMessage(expectedMessages.successLogin);
  });
});
