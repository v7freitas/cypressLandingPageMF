describe("Redes Sociais", () => {
  context("Resolução Desktop", () => {
    beforeEach(() => {
      // Definindo a resolução do desktop
      cy.viewport(1920, 1080);
      //Acessa a página
      cy.visit("/");
    });

    it("Acesso às Redes Sociais da profissional", () => {
      //Testar se o botão de instagram está visível
      cy.get(
        " #contacts > main > div.contacts-container-3 > div > a:nth-child(1)"
      );

      //Testar se o botão do LinkedIn está visível
      cy.get(
        "#contacts > main > div.contacts-container-3 > div > a:nth-child(2)"
      );

      //Verificar se os botões são clicáveis
      cy.get(
        "#contacts > main > div.contacts-container-3 > div > a:nth-child(1)"
      ).click();
      cy.get(
        "#contacts > main > div.contacts-container-3 > div > a:nth-child(2)"
      ).click();
    });

    it("Entrar em contato pelo WhatsApp para agendamento", () => {
      //Testar se o botão de agendar consulta pelo WhatsApp está visível
      cy.get(".home-content-button").should("be.visible");

      //Clica no botão de agendar consulta pelo WhatsApp
      cy.get(".home-content-button").click();

      //Verifica se o link foi redirecionado para o WhatsApp
      cy.url().should(
        "include",
        "https://api.whatsapp.com/send?phone=5583991142751&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20consulta."
      );
    });
  });
});
