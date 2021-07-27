/// <reference types="Cypress" />

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

let randomEmail;


describe("Registration", () => {
    beforeEach(() => {
       cy.visit("/register");
       randomEmail = "email" + getRandomInt(1, 100000) + "@email.com";
    });

    it("Register with valid credentials", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register without credentials", () => {
        cy.get("button").click();
    });

    it("Register with first name exceeding maximum", () => {
        let exceedingMax = "";
        for(let i = 0; i < 256; i++){
            exceedingMax += "d";
        }
        cy.get("#first-name").type(exceedingMax);
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with first name maximum characters", () => {
        let maxCharacters = "";
        for(let i = 0; i < 255; i++){
            maxCharacters += "d";
        }
        cy.get("#first-name").type(maxCharacters);
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    }); 

    it("Register with first name minimum characters", () => {
        cy.get("#first-name").type("d");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });        

    it("Register with space in first name", () => {
        cy.get("#first-name").type(" ");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });   

    it("Register with unicode characters", () => {
        cy.get("#first-name").type("Име");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    }); 

    it("Register with special characters", () => {
        cy.get("#first-name").type("Ime - Drugo Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });    
        
    it("Register without '@' in email", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type("emailemail.com");
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register without '.com' in email", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type("email@email");
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with already registered email", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type("danilotodorqvic@gmail.com");
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with password with 7 characters", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("pass123");
        cy.get("#password-confirmation").type("pass123");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with password with all letters", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password");
        cy.get("#password-confirmation").type("password");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with password with all numbers", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("12345678");
        cy.get("#password-confirmation").type("12345678");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with password with spaces", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("pass word 1");
        cy.get("#password-confirmation").type("pass word 1");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register with password and confirmed password not matching", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password2");
        cy.get("[type='checkbox']").check();
        cy.get("button").click();
    });

    it("Register without checking terms and conditions", () => {
        cy.get("#first-name").type("Ime");
        cy.get("#last-name").type("Prezime");
        cy.get("#email").type(randomEmail);
        cy.get("#password").type("password1");
        cy.get("#password-confirmation").type("password1");
        cy.get("button").click();
    });
});