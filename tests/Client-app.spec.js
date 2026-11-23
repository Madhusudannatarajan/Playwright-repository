const {test,expect} = require("@playwright/test");


test("print product title", async({page})=>{

const products = page.locator("div.card-body");
const productname = "ZARA COAT 3"
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

await page.locator("#userEmail").fill("Maddy@example.com");
await page.locator("#userPassword").fill("Maddy@123");
await page.locator("[type='submit']").click();

//use waitfor with one web element if uses with multiple element 'strict mode voilation alert occurs'//
await page.locator("div.card-body b").first().waitFor();

const title = await products.allTextContents();
console.log(title); //[abc , efg , hij] return string of array

const prodcount = await page.locator("div.card-body b").count();
console.log(prodcount);

// For Loop

for(let i=0; i<prodcount ; i++){

    const txtprod = await products.nth(i).locator("b").textContent();
    console.log(txtprod);

    if(txtprod==productname){

        await products.nth(i).locator("text= Add to Cart").click();

        break;
    }
}


await page.locator("button[routerlink*='cart']").click();

await page.locator("div.cart li").first().waitFor();

const ProductIsVisible= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
console.log(ProductIsVisible)
expect(ProductIsVisible).toBeTruthy();

 await page.locator("button.btn.btn-primary").nth(2).click();
 await page.locator("[value='4542 9931 9292 2293']").fill("4542993192922293");
 await page.locator(".input.txt").nth(1).fill("664");
 await page.locator("input[Type='text']").nth(2).fill("Madhusudan")

 await page.pause();
})