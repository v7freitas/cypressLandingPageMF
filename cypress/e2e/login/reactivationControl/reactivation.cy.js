describe("Controle de reativação", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");

      //Clica no botão anonimo para navegar até a seção de login
      cy.get("button > h1").click();

      //Processo de login
      cy.get('[placeholder="Email"]').type("vff2804@gmail.com");
      cy.get('[placeholder="Senha"]').type("mvp.uvm@ege9kfc!AKN");
      cy.get(".login-button").click();

      //Clica na seção de controle de reativação
      cy.get(".lobby-container-1 > div > :nth-child(3)").click();
    });

    it("Mostrar lista de pacientes e sua classificação de reativação", () => {
      //Verifica se a lista de pacientes e classificação de reativação está sendo exibida
      cy.get(".lobby-reactivation-control-container-1").should("be.visible");

      //Botão para entrar em contato com o paciente deve estar visível e clicável
      cy.get(
        ".lobby-reactivation-control-content > :nth-child(1) > :nth-child(6) > .lobby-reactivation-control-whatsapp-container"
      ).should("not.be.disabled");
    });
  });
});
