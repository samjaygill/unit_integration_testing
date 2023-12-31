describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update display with running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '245');
  });

  it('should update display with arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  });

  it('should allow multiple operations to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  });

  it('should allow range of numbers on dispay aka negative', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  });

  it('should still work even when 0 is used', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  })
})