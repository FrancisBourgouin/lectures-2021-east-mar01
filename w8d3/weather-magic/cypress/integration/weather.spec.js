/// <reference types="cypress" />

describe('Weather app flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the initial page, clicking on city should show current weather', () => {
    // Loading the page is done in the beforeEach
    const torontoButton = cy.get('button[name="Toronto"]')

    torontoButton.click()

    torontoButton.should('have.class', 'selected')

    cy.get('h1 > :nth-child(1)').contains('Current weather for')
    cy.get('h1 > :nth-child(2)').contains('Toronto')

    const montrealButton = cy.get('button[name="Montréal"]')

    montrealButton.click()

    montrealButton.should('have.class', 'selected')

    cy.get('h1 > :nth-child(1)').contains('Current weather for')
    cy.get('h1 > :nth-child(2)').contains('Montréal')

  })
  it('should load the initial page, typing a city name should create a button if the city is not already there', () => {
    const cityInput = cy.get('input')

    cityInput.type('Kansas City')
    cityInput.type('{enter}')

    cy.get('h1 > :nth-child(1)').contains('Current weather for')
    cy.get('h1 > :nth-child(2)').contains('Kansas City')
  })

  it('should not add another button if the city name is already present in the button list', () => {
    const cityInput = cy.get('input')

    cityInput.type('Rouyn-Noranda')
    cityInput.type('{enter}')

    cityInput.type('Rouyn-Noranda')
    cityInput.type('{enter}')

    cy.get('button[name="Rouyn-Noranda"]').should('have.length', 1)
  })
  it('should not do anything if we submit an empty input', () => {
    const cityInput = cy.get('input')

    cityInput.type('{enter}')

    cy.get('button[name=""]').should('have.length', 0)

  })
  it('should show a judgy message if we search for a city that doesnt exist', () => {
    const cityInput = cy.get('input')

    cityInput.type('potato')
    cityInput.type('{enter}')

    cy.get('h2').contains('No valid weather data for that city')
  })
})