@Regression
  Feature: Sign Up
    Background: Navigate to the sign up page
      Given Navigate to sign up page
    @wip
    Scenario Outline: User can sign up with valid credentials
      Given User enters "firstName" first name
      And User enters "lastName" last name
      And User enters "Email" email address
      And User enters "Phone" phone number
      And User clicks gender "<gender>"
      And User clicks agrement checkbox
      When Click on submit button
      Then Verify credentials appears in JavaScript Allert
  Examples:
    | gender |
    |Male    |
    |Female  |

    Scenario Outline: User CAN NOT login with any empty box
    Given User fills the "<option>" blank
    When User fills the other boxes with valid credentials
    And Click on submit button
    Then Verify valid requirements message
    Examples:
      | option |
      |firstname|
      |lastname |
      |email    |
      |phone    |
      |gender   |
      |aggrement|

 Scenario Outline:  User CAN NOT sign up with invalid credentials
    Given User fills the "<option>" with invalid credentials
   Then User fills the other boxes with valid credentials
   And Click on submit button
   Then Verify valid requirements message
   Examples:
     | option |
     |firstname|
     |lastname |
     |email    |

  Scenario Outline: User CAN NOT sign up with invalid phone format
    Given User fills the "<phone>" with invalid credential
    Then User fills the other boxes with valid credentials
    And Click on submit button
    Then Verify valid requirements message
    Examples:
      | phone |
      #phone can not be less then 7 numbers
      |123456|
      #phone can not be more than 12 numbers
      |1234567890123 |
      #phone can not be with alphabetical and special characters also "+"
      |+123asdf%&&    |
      #phone can not be with any space
      |90535 234 34   |