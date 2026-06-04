import {test,Page} from '@playwright/test';

export class signUpPage{
    constructor(private page:Page){}

    readonly nameInput = this.page.getByPlaceholder('Name');
    readonly emailInput = this.page.getByPlaceholder('Email');
    readonly password = this.page.getByPlaceholder('Password');
    readonly checkBox = this.page.getByLabel('Selenium');
    readonly radiobtn = this.page.locator('#gender2');
    readonly stateDropdown = this.page.locator('#state');
    readonly hobbiesMultiSelect  = this.page.locator('#hobbies');
    readonly submitButton = this.page.locator('.submit-btn');

    async signup(name:string,email:string,password:string){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.password.fill(password);
        await this.checkBox.check();
        await this.radiobtn.click();
        await this.stateDropdown.selectOption('Karnataka');
        await this.hobbiesMultiSelect.selectOption(['Playing','Swimming']);
        await this.submitButton.click();
    }
}