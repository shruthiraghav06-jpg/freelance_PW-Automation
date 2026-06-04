import {test,expect} from '@fixtures/loginFixture';

test('Verify dashboard',async({loggedInPage})=>{
    await expect(loggedInPage).toHaveURL(/dashboard/);
})