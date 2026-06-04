import {test as base,Page} from '@playwright/test';
import { fl_loginPage } from '@pages/freelance_loginPage'
import { generateUsers } from '@utilities/generateUsers';
import user from '@testdata/users.json';

type MyFixtures={flLoggedInPage:Page;};

export const test=base.extend<MyFixtures>({
    flLoggedInPage:async({page},use)=>{
        const flLogin=new fl_loginPage(page);
        const users = generateUsers();
        await page.goto('https://freelance-learn-automation.vercel.app/login');
        await flLogin.fl_login(user.validUser.email,user.validUser.password);
        await use(page);
    }
});

export{expect} from '@playwright/test';