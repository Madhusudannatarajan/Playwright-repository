const { test, expect } = require("@playwright/test");
const { promises } = require("node:dns");

test("Windows Handling", async ({ browser }) => {

  const Context = await browser.newContext();
  const page = await Context.newPage();
  
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //locators
  const username = page.locator('#username');
  const password = page.locator('#password');
  const login = page.locator('#signInBtn');

  const documentlink = page.locator("[href*=documents]")
  

  await expect(documentlink).toHaveAttribute("class", "blinkingText");

  const [Childpage] = await Promise.all([
  Context.waitForEvent("page"),
  await documentlink.click()

  ])
  
 const text = await Childpage.locator("p.red").textContent();

 console.log(text);

 const arraytext = text.split("@");
 const value = arraytext[1].split(" ");
 const domain=value[0];

 await page.locator("#username").fill(domain);

})