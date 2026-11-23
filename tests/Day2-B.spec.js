const {test} = require("@playwright/test");

test("second test for URL launch",async({browser})=>{

    const Context = await browser.newContext();

    const page = await Context.newPage();

    await page.goto("https://www.google.com/");


})
