package com.dsr.tests.pages;

import com.dsr.tests.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SignUpPage {
   public SignUpPage(){PageFactory.initElements(Driver.get(),this);}

  @FindBy(id = "1")
    public WebElement firstNameInput;

   @FindBy(id = "2")
    public WebElement lastNameInput;

   @FindBy(id = "3")
    public WebElement emailInput;

   @FindBy(id = "4")
    public WebElement phoneNumberInput;

   @FindBy(xpath = "//input[@value='Male']")
    public WebElement maleGenderBtn;

   @FindBy(css = "input[value='Female']")
    public WebElement famaleGenderBtn;

   @FindBy(name = "Agreement")
    public WebElement agreementCheckBox;

   @FindBy(name = "submitbutton")
    public WebElement submitBtn;

  @FindBy(xpath = "//p")
  public List<WebElement> messages;



}
