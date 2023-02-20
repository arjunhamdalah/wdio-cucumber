Feature: Google Search Engine
    
    Scenario Outline: As a user, I can search anything using google search Engine

        Given I am on the search page
        When I search for <query>
        Then I should see a results for <query>

        Examples:
            | query                                         |
            | Foto hewan lucu                               |
            | LoFi Girl                                     |