import {Page,expect} from '@playwright/test';

export class homePage{
    constructor(private page:Page){}

    readonly card = this.page.locator('div.bottom-div').filter({has: this.page.getByRole('heading',{name:'Selenium For Web Automation'})});
    readonly addToCartButton = this.card.getByRole('button',{name:'Add to Cart'});
    readonly cartButton = this.page.locator('div.navbar-menu-links').getByRole('button',{name:'Cart'});
    readonly enrollButton = this.page.getByRole('button',{name:'Enroll Now'});

    async addCourseToCart(){
        //await this.dialog.waitFor();
        await this.addToCartButton.click();
        await this.cartButton.click();
        
    }
}