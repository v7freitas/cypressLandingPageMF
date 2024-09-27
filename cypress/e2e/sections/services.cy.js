describe("Serviços", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");
    });
    it("Acessar a seção Serviços", () => {
      //Clica no botão de Serviços
      cy.get('.home-container-2 > nav > [href="#clinic"] > button').click();

      //Verifica se o conteúdo da seção está visível
      cy.get("#clinic").should("be.visible");
    });
  });
});
