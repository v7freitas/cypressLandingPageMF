describe("Seção de Contato", () => {
  context("Formulário de contato", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("/");
      cy.get('.home-container-2 > nav > [href="#contacts"] > button').click();
    });

    it("Preencher formulário de contato e submeter com sucesso", () => {
      //Preencher o campo de nome
      cy.get("input[name='name']").type("Fulano da Silva");

      //Preencher o campo telefone
      cy.get("input[name='phone']").type("83999999999");

      //Preencher o campo de conteúdo
      cy.get("textarea[name='message']").type("Conteúdo para contato");

      //Verifica se o reCapcha está visível
      cy.get(".contacts-recaptcha").should("be.visible");

      //Habilitar o botão de envio do formulário manualmente
      cy.get("button[type='submit']").should("be.disabled");
      cy.get('button[type="submit"]').invoke("removeAttr", "disabled").click();

      //O botão foi habilitado maniualmente devido ao reCaptcha e sua complexidade para testes automatizados
    });
  });
});
