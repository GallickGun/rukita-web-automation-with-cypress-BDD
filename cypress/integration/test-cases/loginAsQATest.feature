Feature: Login

Scenario: Login using a valid account
     Given I navigate to ruOptions landing page
     When I input valid email and password
     And I click "Sign in" button
     Then I should be navigated to Dashboard