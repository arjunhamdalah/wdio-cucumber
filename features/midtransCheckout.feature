Feature: Checkout Midtrans Demo
    Scenario: As a user, I can checkout using randomize data

        Given I am on the store page
        When I buy midtrans pillow
        And I input my details
        Then I should see payment page

