describe("Home", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("/");
    });

    it("Verifica se todos os conteúdos da seção estão visíveis", () => {
      cy.get("#home").should("be.visible");
      cy.get(".home-container-1").should("be.visible");
      cy.get(".home-container-2").should("be.visible");
      cy.get(".home-container-3").should("be.visible");
    });
  });
});
