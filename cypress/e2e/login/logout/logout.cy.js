describe("Logout", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");

      //Clica no botão anonimo para navegar até a seção de login
      cy.get("button > h1").click();

      //Processo de login
      cy.get('[placeholder="Email"]').type("email@teste.com");
      cy.get('[placeholder="Senha"]').type("12345678");
      cy.get(".login-button").click();
    });

    it("Fazer logout", () => {
      //Clicar no botão de logout
      cy.get(".lobby-close-button").click();

      //Verifica se o modal de login está sendo exibido na págon inicial
      cy.get(".login-modal").should("be.visible");
    });
  });
});
