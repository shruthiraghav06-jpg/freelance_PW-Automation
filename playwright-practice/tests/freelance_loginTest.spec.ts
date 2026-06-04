import {test,expect} from '@fixtures/freelance_loginFixture';
import { enrollDialog } from '@pages/freelance_enrollDialog';
import { homePage } from '@pages/freelance_homePage';
import enrollmentData from '@testdata/enrollmentData.json'

test('Login as valid user',async({flLoggedInPage})=>{    
    const homepage = new homePage(flLoggedInPage);
    const enroll = new enrollDialog(flLoggedInPage);

    await expect(flLoggedInPage).toHaveTitle(/Learn/);

    await homepage.addCourseToCart();
    await enroll.enrollForCourse(enrollmentData.enroll.address,enrollmentData.enroll.phoneNumber);
    // spec — the test owns the checks
    await expect(enroll.orderMessage).toContainText('Your order id is');
    const orderId = await enroll.getOrderId();
    expect(orderId).toMatch(/^order-/);

})