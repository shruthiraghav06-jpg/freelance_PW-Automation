import {Page,expect} from '@playwright/test';

export class enrollDialog{
    constructor(private page:Page){}

    readonly enrollButton = this.page.getByRole('button',{name:'Enroll Now'});

    readonly dialog       = this.page.getByRole('dialog');
    readonly address      = this.dialog.locator('#address');
    readonly phone        = this.dialog.locator('#phone');
    readonly enrollNowBtn = this.dialog.getByRole('button', { name: 'Enroll Now' });
    
    readonly orderMessage = this.dialog.locator('h4.uniqueId');
    readonly orderId      = this.orderMessage.locator('b');

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