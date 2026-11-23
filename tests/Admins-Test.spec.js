const {test, expect} =require("@playwright/test"); //import

test("My first code", async({browser})=>{
const Context = await browser.newContext();

const page = await Context.newPage();

await page.goto("https://www.instagram.com/?hl=en")
console.log(await page.title());
await page.locator('#_R_ojadeslcldcpbn6b5ipamH1_').fill("Maddy");
await page.locator("[type='password']").fill("md1234");
await page.locator('div[aria-label="Log In"]').click();

})

test("Login Page Facebook", async ({ page }) => {

    // Launch  a URL
    await page.goto("https://facebook.com/");
    console.log(await page.title());


})