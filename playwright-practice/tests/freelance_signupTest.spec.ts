import{test,expect} from '@playwright/test';
import {signUpPage} from '@pages/freelance_signupPage';
import {generateUsers} from '@utilities/generateUsers';
import users from '@testdata/users.json';

test('User sign up', async({page})=>{
    const signupPage = new signUpPage(page);
    const user=generateUsers();

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await signupPage.signup(user.name,user.email,users.commonPassword.password );
    await expect(page).toHaveURL(/login/);
})

