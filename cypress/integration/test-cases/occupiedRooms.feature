Feature: Filter Occupied Rooms and Available Rooms
    As QA Test, I want to filter Occupied Rooms on Rukita 98 Residence Tebet


Background: Login as QA Test and select Rukita 98 Residence Tebet
    Given I have logged in as QA Test
     When I select "Rukita 98 Residence Tebet" from property dropdown
     Then I should see "Total: 31 Kamar"

Scenario: Find Occupied Rooms using filter
    When I select "Terisi" from status kamar dropdown
    And I click "Simpan" button
    Then I should see "Terisi" filter label is applied
    And I should see "Total: 14 Kamar"
    And I should see "Terisi" mark on displayed room cards

Scenario: find Available Rooms using filter
    When I select "Tersedia" from status kamar dropdown
    And I click "Simpan" button
    Then I should see "Tersedia" filter label is applied
    And I should see "Total: 14 Kamar"
    And I should see "Tersedia" mark on displayed room cards