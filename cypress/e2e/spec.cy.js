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
      .click()
    cy.get("#root > div > div.filters > div:nth-child(2) > div")
      .type("1{enter}")
    cy.get("#root > div > div.filters > div:nth-child(3) > div") 
    .type('Cypress Test{enter}')
    cy.get("#root > div > div.display > div > div:nth-child(1) > form > input[type=text]")
     .click()
      .type('testing')
    cy.get("#root > div > div.display > div > div:nth-child(1) > form > button")
      .click()
    cy.get("#root > div > div.display > div > div:nth-child(1) > div.comments > div:nth-child(1) > div > button:nth-child(1)")
      .click()
    cy.get("#root > div > div.display > div > div:nth-child(1) > div.comments > div:nth-child(1) > p")
      .click()
      .type('edit test')
    cy.get("#root > div > div.display > div > div:nth-child(1) > div.comments > div:nth-child(1) > div > button:nth-child(1)")
      .click()
    cy.get("#root > div > div.display > div > div:nth-child(1) > div.comments > div:nth-child(1) > div > button:nth-child(2)")
      .click()
    cy.get("#root > div > div.display > div > div > div:nth-child(1) > div > button.delete-button").first()
      .click()
})
})


