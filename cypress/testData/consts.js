// centralizing test data for easy maintenance

const invalidCredentials = {
  wrongUsername: "invaliduser",
  wrongPassword: "wrongpassword",
  emptyUsername: " ",
  emptyPassword: " ",
};

const expectedMessages = {
  successLogin: "You logged into a secure area!",
  invalidUsername: "Your username is invalid!",
  invalidPassword: "Your password is invalid!",
};

export { invalidCredentials, expectedMessages };
