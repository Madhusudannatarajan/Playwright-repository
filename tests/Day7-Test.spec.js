const { test, expect } = require("@playwright/test");
const { ChildProcess } = require("node:child_process");
const { promises } = require("node:dns");

test("Windows Handling", async ({ browser })=>{

  const Context = await browser.newContext();
  const page = await Context.newPage();
  
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //locators
  const username = page.locator('#username');
  const password = page.locator('#password');
  const login = page.locator('#signInBtn');

  

})