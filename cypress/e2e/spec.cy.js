describe('Hack-street boys Project', () => {
 
   
   
  it('Gets and asserts', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('input to post', () => {
  it('Gets, types and asserts', () => {

    cy.get('select')
      .select(1)
      .invoke('val')
      .should('eq', "1")
    cy.get('input').first()
      .type('Cypress Test')
    cy.get('textarea')
      .type('Cypress Text post')
    cy.get("#root > div > div.create-post > div > div:nth-child(2) > button")
    

  })
})





