package com.dsr.tests.stepDefinitions;

import com.dsr.tests.pages.SignUpPage;
import com.dsr.tests.utilities.ConfigurationReader;
import com.dsr.tests.utilities.Driver;
import com.dsr.tests.utilities.MyUtilities;
import com.github.javafaker.Faker;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;

public class SignUpStepDefs {
    SignUpPage signUpPage=new SignUpPage();

    Faker faker=new Faker();
    String firstName=faker.name().firstName();
    String lastname=faker.name().lastName();
    String email=firstName+lastname+"@company.com";
    String phoneNumber=faker.phoneNumber().subscriberNumber(10);
    String Gender;
    String box;

    @Given("Navigate to sign up page")
    public void navigateToSignUpPage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Given("User enters {string} first name")
    public void user_enters_first_name(String string) {
    signUpPage.firstNameInput.sendKeys(firstName);
    }


    @Given("User enters {string} last name")
    public void user_enters_last_name(String string) {
        signUpPage.lastNameInput.sendKeys(lastname);
    }
    @Given("User enters {string} email address")
    public void user_enters_email_address(String string) {
        signUpPage.emailInput.sendKeys(email);
    }
    @Given("User enters {string} phone number")
    public void user_enters_phone_number(String string) {
       signUpPage.phoneNumberInput.sendKeys(phoneNumber);
    }
    @And("User clicks gender {string}")
    public void userClicksGender(String gender) {
        Gender=gender;
        if(gender.equals("Male")){
            signUpPage.maleGenderBtn.click();
        }else if (gender.equals("Female")){
            signUpPage.famaleGenderBtn.click();
        }

    }
    @Given("User clicks agrement checkbox")
    public void user_clicks_agrement_checkbox() {
       signUpPage.agreementCheckBox.click();
    }

    @When("Click on submit button")
    public void click_on_submit_button() {
       signUpPage.submitBtn.click();
        MyUtilities.waitFor(2);
    }
    @Then("Verify credentials appears in JavaScript Allert")
    public void verify_credentials_appears_in_JavaScript_Allert() {
        Alert alert= Driver.get().switchTo().alert();
        String jsMessage=alert.getText();
        System.out.println(jsMessage);
        Assert.assertTrue(jsMessage.contains(firstName)&&jsMessage.contains(lastname)&&jsMessage.contains(email)&&jsMessage.contains(phoneNumber)&&jsMessage.contains(Gender)&&jsMessage.contains("true"));
    }

    @Given("User fills the {string} blank")
    public void user_fills_the_blank(String option) {
        box=option;
        switch (option){
            case"firstname":
                firstName="";
                break;
            case "lastname":
                lastname="";
                break;
            case "email":
                email="";
                break;
            case "phone":
                phoneNumber="";
                break;
        }
    }

    @When("User fills the other boxes with valid credentials")
    public void user_fills_the_other_boxes_with_valid_credentials() {
        signUpPage.firstNameInput.sendKeys(firstName);
        signUpPage.lastNameInput.sendKeys(lastname);
        signUpPage.emailInput.sendKeys(email);
        if(!box.equals("phone")){
            signUpPage.phoneNumberInput.sendKeys(phoneNumber);
        }

        if (!box.equals("gender")){
            signUpPage.maleGenderBtn.click();
        }

        if (!box.equals("aggrement")){
            signUpPage.agreementCheckBox.click();
        }
    }


    @Then("Verify valid requirements message")
    public void verify_valid_requirements_message() {
        String actualMessage=signUpPage.messages.get(0).getText();
    if (box.equals("firstname")){
        Assert.assertEquals("Valid first name is required.",actualMessage);
    }else if(box.equals("lastname")){
        Assert.assertEquals("Valid last name is required.",actualMessage);
    }else if(box.equals("email")){
        Assert.assertEquals("Valid email is required.",actualMessage);
    }else if (box.equals("phone")){
        Assert.assertEquals("Valid phone number is required.",actualMessage);
    }else if (box.equals("gender")){
        Assert.assertEquals("Choose your gender.",actualMessage);
    }else if (box.equals("aggrement")){
        Assert.assertEquals("You must agree to the processing of personal data.",actualMessage);
    }
    }


    @Given("User fills the {string} with invalid credentials")
    public void userFillsTheWithInvalidCredentials(String option) {
        box=option;
        switch (option){
            case"firstname":
                //firstname input box doesn't allow to write more than 25 character
                firstName="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
                break;
            case "lastname":
                //lastname input box doesn't allow to write more than 25 character
                lastname="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
                break;
            case "email":
                //email input box doesn't allow to write invalid email format
                email="aaaaaaa.com";
                break;
        }
    }

    @Given("User fills the {string} with invalid credential")
    public void userFillsTheWithInvalidCredential(String phone) {
        box="phone";
        signUpPage.phoneNumberInput.sendKeys(phone);
    }
}
