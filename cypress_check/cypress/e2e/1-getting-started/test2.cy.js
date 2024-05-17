beforeEach("", () => {
  cy.log("Before Each Hook")
  
})

before("", () => {
  cy.log("Before Hook")
  
})


describe('Group 1', () => {

  it('Login Demo QA', () => {

    cy.visit('login')
  
    cy.fixture('example.json').then((data) => {
  
      cy.get('[name="username"]').type(data.username)
      cy.get('[name="password"]').type(data.password)
      cy.get('[type="submit"]').click()
  
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.homePageHeading)
  
    })
  })

  describe('Child Group 1', () => {
    it('Login Demo QA', () => {

      cy.visit('login')
    
      cy.fixture('example.json').then((data) => {
    
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
    
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.homePageHeading)
    
      })
    })
  })
})

describe('Group 2', () => {

  it('Login Demo QA', () => {

    cy.visit('login')
  
    cy.fixture('example.json').then((data) => {
  
      cy.get('[name="username"]').type(data.username)
      cy.get('[name="password"]').type(data.password)
      cy.get('[type="submit"]').click()
  
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.homePageHeading)
  
    })
  })

  describe('Child Group 2', () => {
    it('Login Demo QA', () => {

      cy.visit('login')
    
      cy.fixture('example.json').then((data) => {
    
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
    
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.homePageHeading)
    
      })
    })
  })
})

afterEach("", () => {
  cy.log("After Each Hook")
  
})

after("", () => {
  cy.log("After Hook")
  
})