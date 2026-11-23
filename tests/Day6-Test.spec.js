const {test,expect} =require("@playwright/test"); //import
const { asyncWrapProviders } = require("node:async_hooks");
const { sign } = require("node:crypto");
test("Test", async({browser})=>{
const Context = await browser.newContext();

const page = await Context.newPage();
 
//locators
const username = page.locator("#_R_64qjbn5b5bb6ane6b5ipamH1_");
const login = page.locator('div[aria-label="Log In"]');

await page.goto("https://www.instagram.com/accounts/login/");
console.log(await page.title());
await username.fill("Maddy");
await page.getByLabel("password").fill("Md1234");
await login.click();

console.log(await page.locator('div[aria-label="Log In"][aria-disabled="true"]').textContent()
);

//await expect (page.locator("[aria-label='Log In']")).toContainText();
//await page.pause();

})


test.only("Test new", async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

const username = page.locator('#username');
const password= page.locator('#password');
const login = page.locator('#signInBtn');


await username.fill("Maddy");
await password.fill("Learning@830$3mK2");
await login.click();

//get the text of error message//

console.log(await page.locator("[style*='block']").textContent());

await expect(page.locator("[style*='block']")).toContainText("Incorrect");

await username.fill("rahulshettyacademy");
await login.click();

console.log(await page.locator(".card-body a").nth(0).textContent());

//await page.pause();

})
