import {Page,expect} from '@playwright/test';

export class homePage{
    constructor(private page:Page){}

    readonly card = this.page.locator('div.bottom-div').filter({has: this.page.getByRole('heading',{name:'Selenium For Web Automation'})});
    readonly addToCartButton = this.card.getByRole('button',{name:'Add to Cart'});
    readonly cartButton = this.page.locator('div.navbar-menu-links').getByRole('button',{name:'Cart'});
    readonly enrollButton = this.page.getByRole('button',{name:'Enroll Now'});
    readonly dialog       = this.page.getByRole('dialog');
    readonly address      = this.dialog.locator('#address');
    readonly phone        = this.dialog.locator('#phone');
    readonly enrollNowBtn = this.dialog.getByRole('button', { name: 'Enroll Now' });
    readonly orderMessage = this.dialog.locator('h4.uniqueId');
    readonly orderId      = this.orderMessage.locator('b');

    async addCourseToCart(){
        //await this.dialog.waitFor();
        await this.addToCartButton.click();
        await this.cartButton.click();
        
    }

    async enrollForCourse(address:string,phone:string){
        await this.enrollButton.click();
        await this.address.fill(address);
        await this.phone.fill(phone);
        await this.enrollNowBtn.click();
    }

    // page object — waits, then returns. No verdict.
    async getOrderId(): Promise<string> {
        await this.orderMessage.waitFor();   // wait so textContent isn't read too early
        return (await this.orderId.textContent())?.trim() ?? '';
}
}