describe("Seção de Agendamentos", () => {
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

      //Clica no botão de agendamento
      cy.get(".lobby-container-1 > div > :nth-child(2)").click();
    });

    it("Agendar paciente", () => {
      //Verifica se a lista de pacientes e agendamentos está sendo exibida
      cy.get(".lobby-patient-scheduling-container-1").should("be.visible");

      //Seleciona o botão de agendar paciente na lista de pacientes
      cy.get(
        ":nth-child(1) > table > tbody > :nth-child(2) > :nth-child(5)"
      ).click();

      //Verifica se o modal de agendamento está sendo exibido
      cy.get(".lobby-patient-detail-modal").should("be.visible");

      //Preenche a data de agendamento e a hora
      cy.get(".lobby-patient-detail-container-1 > input").type(
        "2024-01-01T12:30"
      );

      //Seleciona o botão de agendar
      cy.get(".lobby-patient-detail-container-1")
        .contains("button", "Agendar")
        .click(); //Ainda não foi implementado a requisão para agendar o paciente na lista de agendamentos

      //Fechar modal de agendamento
      cy.get(".lobby-patient-detail-container-1")
        .contains("button", "Fechar")
        .click();
    });

    //Confirmação de agendamento e remoção de agendamento ainda não implementados
  });
});
