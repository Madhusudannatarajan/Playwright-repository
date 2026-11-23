const {test, expect} = require("@playwright/test");
const { count } = require("node:console");

test("test whole application",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

const email = "Maddy@example.com";
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Maddy@123");
await page.locator("#login").click();

const product = page.locator("div.card-body");
const productname = "ADIDAS ORIGINAL"; 

await page.locator("div.card-body b").first().waitFor();

const title = await product.allTextContents();
console.log(title);


const prodcount = await page.locator("div.card-body b").count();
console.log(prodcount);

for(let i = 0 ; i<prodcount ; i++){

    const text= await product.nth(i).locator("b").textContent();
    console.log(text);
    
    if(text==productname){
        await product.nth(i).locator("text = Add to Cart").click();

        break;

    }
}

await page.getByRole('button', { name: '   Cart' }).click();


await page.locator("div.cart li").first().waitFor();
const productvisibility = page.locator("h3:text-is('ADIDAS ORIGINAL')").isVisible();
console.log(productvisibility);

await page.locator("button:text-is('Checkout')").click();
await page.locator("[value='4542 9931 9292 2293']").fill("4545466634355");
await page.locator(".input.txt").nth(1).fill("664");
await page.locator("input[Type='text']").nth(2).fill("Madhusudan");

await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");

const countrydrp = await page.locator("section.ta-results");
await countrydrp.waitFor();

const option = await countrydrp.locator("button").count();

console.log(option);
for(let i=0 ; i<option ; i++){
    const text = await countrydrp.locator("button").nth(i).textContent();
    console.log(text);

    if(text== " India"){
    await countrydrp.locator("button").nth(i).click();
    
    break;
    }
}


await expect(page.locator("label[type='text']")).toHaveText("Maddy@example.com");
await page.locator("a.btnn ").click();
await expect(page.locator("H1.hero-primary")).toHaveText(" Thankyou for the order. ");

const orderid = await page.locator("label.ng-star-inserted").textContent();
console.log(orderid);


})