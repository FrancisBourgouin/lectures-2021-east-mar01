describe('dumb things', () => {
  it('tests google?', () => {
    cy.visit('https://google.com')

    const searchBar = cy.get('.gLFyf')

    searchBar.type('Einstein Rosen Bridges{enter}')

    cy.get('[href="https://en.wikipedia.org/wiki/Wormhole"] > .LC20lb').contains('Wormhole')
  })


})