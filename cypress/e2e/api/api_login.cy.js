/// <reference types="cypress" />

describe("API - Teste de resposta da requisição de login", () => {
  it("Requisição de login com sucesso", () => {
    cy.request({
      method: "POST",
      url: "https://mayarafurtado-paliar-br-springboot.onrender.com/auth/login",
      body: {
        email: "vff2804@gmail.com",
        password: "mvp.uvm@ege9kfc!AKN",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
