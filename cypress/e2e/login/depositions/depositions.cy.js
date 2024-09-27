describe("Depoimentos", () => {
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

      //Clica na seção de depoimentos
      cy.get(".lobby-container-1 > div > :nth-child(4)").click();
    });

    it("Mostrar lista de pacientes que enviaram depoimentos", () => {
      //Verifica se a lista de pacientes e depoimentos está sendo exibida
      cy.get(".lobby-deposition-container").should("be.visible");

      //Exibir modal de detalhes do depoimento
      cy.get(".lobby-deposition-content > :nth-child(1) > :nth-child(5)")
        .click()
        .should("be.visible");

      //Fechar modal de detalhes
      cy.get(".deposition-container-1 > button").click();

      //Modal de detalahes deve ser fechado
      cy.get(".deposition-container-1").should("not.exist");
    });
  });
});
