describe("Biografia", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");
    });

    it("Mudança de slides na seção de Biografia", () => {
      //Clica no botão de Biografia
      cy.get('.home-container-2 > nav > [href="#biography"] > button').click();

      //Verifica se o conteúdo da seção está visível
      cy.get("#biography").should("be.visible");

      //Verifica se o primeiro slide está visível
      cy.get(".swiper-slide-active").should("be.visible");

      //Clica no botão de próximo slide
      cy.get(".biography-container-1 > .swiper > .swiper-button-next").click();

      //Verifica se o segundo slide está visível
      cy.get(".swiper-slide-active").should("be.visible");
    });
  });
});
