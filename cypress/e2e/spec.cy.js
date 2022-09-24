describe('empty spec', () => {
  it('saves last checked', () => {
    cy.visit('/')
    cy.get('#topics').contains(/objects/i).click()
    cy.get('#objects').should('be.checked')
    cy.get('#topics').contains(/classes/i).click()
    cy.reload()
    cy.get('#classes').should('be.checked')
  })
})