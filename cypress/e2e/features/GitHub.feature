Feature: Wikipedia

  I want to visit GitHub
  
  @GitHub
  Scenario: Opening GitHub
    Given I open "https://github.com/"
    Then Search [file:"data.json"]