import {Page} from '@playwright/test'

export class fl_loginPage{
    constructor(private page : Page){}

    readonly emailInput=this.page.getByPlaceholder('Enter Email');
    readonly passwordInput=this.page.getByPlaceholder('Enter Password');
    readonly signInBtn=this.page.getByRole('button', {name:'Sign in'});

    async fl_login(username:string,password:string){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInBtn.click();
    }

}