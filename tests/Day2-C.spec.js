const {test} =require ("@playwright/test");

test("test third url",async({browser})=>{

    const Context = await browser.newContext();

    const page = await Context.newPage();

    await page.goto("https://www.hotstar.com/in/onboarding/profile?ref=%2Fin%2Fhome");

    await page.pause();



})