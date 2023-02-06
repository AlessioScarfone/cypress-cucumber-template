import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";


Given('I open {string}', (url) => {
    cy.visit(url);
})
