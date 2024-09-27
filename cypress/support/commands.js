//Intercepta a requisição do ReCAPTCHA
Cypress.Commands.add("mockedRecaptcha", () => {
  cy.intercept("POST", "**/recaptcha/api2/reload**", {
    statusCode: 200,
    body: {
      success: true,
    },
  }).as("recaptchaVerify");
});

Cypress.Commands.add("mockedRecaptchaToken", () => {
  cy.window().then((win) => {
    win.grecaptcha = {
      execute: () => {
        return new Promise((resolve) => {
          resolve("mocked-token");
        });
      },
    };
  });
});
