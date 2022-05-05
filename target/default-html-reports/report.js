$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SignUpFeature.feature");
formatter.feature({
  "name": "Sign Up",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can sign up with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User enters \"firstName\" first name",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"lastName\" last name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"Email\" email address",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"Phone\" phone number",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks gender \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks agrement checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify credentials appears in JavaScript Allert",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "gender"
      ]
    },
    {
      "cells": [
        "Male"
      ]
    },
    {
      "cells": [
        "Female"
      ]
    }
  ]
});
formatter.background({
  "name": "Navigate to the sign up page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to sign up page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.navigateToSignUpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can sign up with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User enters \"firstName\" first name",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"lastName\" last name",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_last_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Email\" email address",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_email_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Phone\" phone number",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.userClicksGender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks agrement checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_clicks_agrement_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "When "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify credentials appears in JavaScript Allert",
  "keyword": "Then "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.verify_credentials_appears_in_JavaScript_Allert()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Navigate to the sign up page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to sign up page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.navigateToSignUpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can sign up with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User enters \"firstName\" first name",
  "keyword": "Given "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"lastName\" last name",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_last_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Email\" email address",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_email_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Phone\" phone number",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_enters_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks gender \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.userClicksGender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks agrement checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.user_clicks_agrement_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "When "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify credentials appears in JavaScript Allert",
  "keyword": "Then "
});
formatter.match({
  "location": "com.dsr.tests.stepDefinitions.SignUpStepDefs.verify_credentials_appears_in_JavaScript_Allert()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});