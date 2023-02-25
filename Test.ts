import{t} from 'testcafe'
import{Selector} from 'testcafe'

fixture `Sauce Demo Test`
.page('https://www.saucedemo.com')

test('first',async t =>{

await t

.typeText('#user-name','performance_glitch_user')
.typeText('#password','secret_sauce')

.click('#login-button')

.expect(Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket').exists)
    .ok()

.expect(Selector('.inventory_item_price').withText('49.99').exists)
.ok()

.click('#add-to-cart-sauce-labs-backpack')
.click('#add-to-cart-sauce-labs-bike-light')

.click('#shopping_cart_container')


.click('#checkout')

.typeText('#first-name','Heshan')
.typeText('#last-name','Dunumala')
.typeText('#postal-code','85000')

.click('#continue')


.click('#finish')


});