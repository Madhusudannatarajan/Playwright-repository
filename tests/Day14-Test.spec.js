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

const ProductIsVisible= await page.locator("h3:text-is('ZARA COAT 3')").isVisible();
console.log(ProductIsVisible)
expect(ProductIsVisible).toBeTruthy();

//Clisck the checkout

 await page.locator("button:text-is('Checkout')").click();
 await page.locator("[value='4542 9931 9292 2293']").fill("4542993192922293");
 await page.locator(".input.txt").nth(1).fill("664");
 await page.locator("input[Type='text']").nth(2).fill("Madhusudan")

//select the country
await page.locator("input[placeholder='Select Country']").pressSequentially("Ind",{delay:2*1000});

const countrydrp= await page.locator("section.ta-results");

await countrydrp.waitFor();

//get the country count
const option = await countrydrp.locator("button").count();
console.log(option);

for(let i=0 ; i<option ; i++){
const text =  await countrydrp.locator("button").nth(i).textContent();

if(text==" India"){
    await countrydrp.locator("button").nth(i).click();

break
}

}


})
