describe("Cadastro de pacientes", () => {
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
      //Após login verifica se a tela de cadastro de paciente está visível
      cy.get(".lobby-container-2").should("be.visible");
    });

    it("Preencher campos do cadastro e cadastrar paciente", () => {
      //Nome
      cy.get("#name").type("Paciente Teste");
      //Telefone
      cy.get("#tel").type("83999999999");
      //Email
      cy.get("#email").type("email@teste.com");
      //Data de nascimento
      cy.get("#date").type("2024-01-01");
      //CPF
      cy.get("#cpf").type("12345678901");
      //Endereço
      cy.get("#address").type("Rua Teste, 123");
      //Bairro
      cy.get("#district").type("Bairro Teste");
      //Cidade
      cy.get("#city").type("Cidade Teste");
      //Estado
      cy.get("#state").type("Estado Teste");
      //CEP
      cy.get("#cep").type("12345678");

      //Clicar no botão de cadastrar
      cy.get(".lobby-patient-registration-container-2 > form > button").click();

      //Após enviar o formulário, deve ser redirecionado para a página inicial
      cy.get(".home-container-1").should("be.visible");
    });

    it("Mostra lista de pacientes cadastrados, os detalhes do paciente e fecha o modal", () => {
      //Lista de pacientes deve estar visível
      cy.get(".lobby-patient-registration-container-3").should("be.visible");
      //Clicar no botão de detalhes do paciente
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      //Detalhes do paciente deve estar visível
      cy.get(".lobby-patient-detail-container-1").should("be.visible");
      //Fechar modal de detalhes
      cy.get('[type="button"]').click();

      //A funcionalidade de adicionar um paciente novo na lista após cadastrar ainda não foi implementada
    });

    it("Mostra lista de pacientes cadastrados, os detalhes do paciente e salva as alterações", () => {
      //Lista de pacientes deve estar visível
      cy.get(".lobby-patient-registration-container-3").should("be.visible");
      //Clicar no botão de detalhes do paciente
      cy.get("tbody > :nth-child(1) > :nth-child(4)").click();
      //Detalhes do paciente deve estar visível
      cy.get(".lobby-patient-detail-container-1").should("be.visible");
      //Salva alterações realizadas no paciente
      cy.get('.lobby-patient-detail-container-1 > [type="submit"]').click();
      //Mostra mensagem de sucesso ao salvar as alterações
      cy.get(".message-container > section").contains(
        "Paciente atualizado com sucesso!"
      );
      //Fechar modal com mensagem de sucesso
      cy.get(".message-container > section > button").click();
    });
  });
});
