import { Given, Then, Before, And } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("RUN BEFORE");
})


Given('I open Wikipedia page', () => {
    cy.visit("https://it.wikipedia.org/wiki/Pagina_principale");
    cy.waiting(2000);
})


Then("Search {string}", (searchTerm) => {
    cy.get('#searchInput', { timeout: 15000 })
        .clear()
        .type(searchTerm)
        .type('{enter}');
})