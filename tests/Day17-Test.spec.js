const {test} = require("@playwright/test");

test("playwright inbuild locator", async({page})=>{

await page.locator("https://rahulshettyacademy.com/angularpractice/");

await page.getByText('Check me out if you Love').click();
await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
await page.getByLabel("Gender").selectOption("female");
await page.getByLabel("Employed").click();
await page.getByPlaceholder("password").fill("Maddy@123")
await page.getByRole("btn",{name:"submit"}).click();

})
