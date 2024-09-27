describe("Depoimentos", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");
      //Clica no botão de Depoimentos para navegar até a seção
      cy.get(
        '.home-container-2 > nav > [href="#depositions"] > button'
      ).click();
    });

    it("Mudança de slides na seção de Depoimentos", () => {
      //Verifica se o conteúdo da seção está visível
      cy.get("#depositions").should("be.visible");

      //Verifica se o primeiro slide está visível
      cy.get(".swiper-slide-active").should("be.visible");

      //Clica no botão de próximo slide
      cy.get(
        ".depositions-container-1 > .swiper > .swiper-button-next"
      ).click();

      //Verifica se o segundo slide está visível
      cy.get(".swiper-slide-active").should("be.visible");
    });

    it("Escrever depoimento com sucesso", () => {
      //Clicar no botão de escrever depoimento
      cy.get(".depositions-button").click();

      //Verifica se o modal de depoimento está visível
      cy.get(".create-deposition-modal").should("be.visible");

      //Preenche o campo de nome
      cy.get('.create-deposition-form > [placeholder="Nome"]').type(
        "Nome teste"
      );

      //Preenche o campo de telefone
      cy.get('.create-deposition-form > [placeholder="Telefone"]').type(
        "83999999999"
      );

      //Preenche o campo de conteúdo
      cy.get(".create-deposition-textarea").type("Conteúdo teste");

      //Habilitar o botão de envio do formulário manualmente e clicar
      cy.get(".create-deposition-button").should("have.attr", "disabled");
      cy.get(".create-deposition-form > .create-deposition-button")
        .contains("Enviar Depoimento")
        .invoke("removeAttr", "disabled")
        .click();
    });

    it("Escrever depoimento com campos vazios", () => {
      //Clicar no botão de escrever depoimento
      cy.get(".depositions-button").click();

      //Verifica se o modal de depoimento está visível
      cy.get(".create-deposition-modal").should("be.visible");

      //Habilitar o botão de envio do formulário manualmente
      cy.get('.create-deposition-form > [disabled=""]').should("be.disabled");

      //Habilitar o botão de envio do formulário manualmente e clicar
      cy.get(".create-deposition-button").should("have.attr", "disabled");
      cy.get(".create-deposition-form > .create-deposition-button")
        .contains("Enviar Depoimento")
        .invoke("removeAttr", "disabled")
        .click();

      //Teste falho pois o botão deveria mostrar um alerta para preencher os campos obrigatórios
    });

    it("Fechar modal de depoimento", () => {
      //Clicar no botão de escrever depoimento
      cy.get(".depositions-button").click();

      //Verifica se o modal de depoimento está visível
      cy.get(".create-deposition-modal").should("be.visible");

      //Clicar no botão de fechar modal
      cy.get(".create-deposition-button").contains("Cancelar").click();

      //Verifica se o modal de depoimento está fechado sem should
      cy.get(".create-deposition-modal").should("not.exist");
    });
  });
});
