import {test,expect} from '@fixtures/freelance_loginFixture';
import { homePage } from '@pages/freelance_homePage';
import enrollmentData from '@testdata/enrollmentData.json'

test('Login as valid user',async({flLoggedInPage})=>{    
    const homepage = new homePage(flLoggedInPage);

    await expect(flLoggedInPage).toHaveTitle(/Learn/);

    await homepage.addCourseToCart();
    await homepage.enrollForCourse(enrollmentData.enroll.address,enrollmentData.enroll.phoneNumber);
    // spec — the test owns the checks
    await expect(homepage.orderMessage).toContainText('Your order id is');
    const orderId = await homepage.getOrderId();
    expect(orderId).toMatch(/^order-/);

})