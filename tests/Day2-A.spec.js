const {test} = require("@playwright/test");

test("This is to understand the code",async({browser})=>{

    const Context =await browser.newContext();
    const page =await Context.newPage();
    await page.goto("https://www.instagram.com/accounts/login/?hl=en"); 
})

