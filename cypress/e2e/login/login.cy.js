describe("Login", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");
    });

    it("Realizar login com sucesso", () => {
      //Clica no botão anonimo para navegar até a seção de login
      cy.get("button > h1").click();

      //Modal de login é exibido
      cy.get(".login-modal").should("be.visible");

      //Preencher o campo de email
      cy.get('[placeholder="Email"]').type("teste@email.com");

      //Preencher o campo de senha
      cy.get('[placeholder="Senha"]').type("123456");

      //Clicar no botão de login
      cy.get(".login-button").click();

      //Redirecionamento para a página de gerenciamento de tarefas
      cy.get(".lobby-modal").should("be.visible");
    });

    //Teste de login com email e senha inválido ainda não implementado
  });
});
