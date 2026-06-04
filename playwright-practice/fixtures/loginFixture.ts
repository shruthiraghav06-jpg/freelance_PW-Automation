import{test as base,Page} from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { config } from '@config/configReader';

type MyFixtures ={loggedInPage:Page;};

export const test = base.extend<MyFixtures>({
    loggedInPage: async({page},use)=>{
        console.log('====BEFORE TEST====')
        const loginPage = new LoginPage(page);
        await page.goto(config.baseURL);
        await loginPage.login(config.username,config.password);
        await use(page);
        console.log('====AFTER TEST====');
        await page.close();
    }
});
export {expect} from '@playwright/test';