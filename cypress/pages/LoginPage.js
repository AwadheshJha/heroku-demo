/**
 * Login Page Object Model
 * This class encapsulates all the login page elements and actions
 * Following POM pattern to improve test maintainability and reduce code duplication
 */
class LoginPage {
  get usernameInput() {
    return cy.get("#username");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get("#flash");
  }

  get successMessage() {
    return cy.get("#flash");
  }

  get logoutButton() {
    return cy.get(".button.secondary");
  }

  get pageTitle() {
    return cy.get("h2");
  }

  // Navigate to the login page

  visit() {
    cy.visit("/login");
  }

  enterUsername(username) {
    this.usernameInput.clear().type(username);
  }

  enterPassword(password) {
    this.passwordInput.clear().type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  /**
   * Complete login process with provided credentials
   * @param {string} username - Username to login with
   * @param {string} password - Password to login with
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyErrorMessage(expectedMessage) {
    this.errorMessage
      .should("be.visible")
      .and("contain", expectedMessage)
      .and("have.class", "flash error");
  }

  verifySuccessMessage(expectedMessage) {
    this.successMessage
      .should("be.visible")
      .and("contain", expectedMessage)
      .and("have.class", "flash success");
  }

  /**
   * Verify that user is redirected to secure area after successful login
   */
  verifySuccessfulLogin() {
    cy.url().should("include", "/secure");
    this.pageTitle.should("contain", "Secure Area");
    this.logoutButton.should("be.visible");
  }

  /**
   * Verify that user remains on login page after failed login
   */
  verifyFailedLogin() {
    cy.url().should("include", "/login");
    this.pageTitle.should("contain", "Login Page");
  }
}

export default LoginPage;
