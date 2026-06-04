import {Page} from 'playwright/test'

export class LoginPage{
    constructor(private page : Page){}
    readonly usernameInput = this.page.locator('input[name="username"]');
    readonly passwordInput = this.page.locator('input[name="password"]');
    readonly loginButton = this.page.locator('button[type="submit"]');

    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.page.waitForTimeout(2000);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}