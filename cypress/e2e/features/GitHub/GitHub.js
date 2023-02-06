import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Then("Search [file:{string}]", (fileName) => {
    cy.fixture(fileName).then(fileContent => {
        cy.get('.header-search-wrapper > .form-control')
            .clear()
            .type(fileContent.search)
            .type('{enter}')
    })
})