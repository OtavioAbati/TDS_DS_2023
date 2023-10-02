describe('Acesso a pagina', () => {
    // it('Validar acesso no site', () => {
    //     cy.visit('https://br.shein.com/');
    //     cy.title().should('include', 'ANIVERSÁRIO DE SHEIN丨Moda feminina | Roupas, Acessórios e muitos mais | SHEIN Brasil');
    //     cy.get('#header_logo_icon').should('exist');
    //     cy.url().should('eq', 'https://br.shein.com/'); 
    // });

    it('Fazer o cadastro no site', () => {
        cy.visit('https://cliente.americanas.com.br/minha-conta/cadastro?next=https://www.americanas.com.br/');
        
    });


});