const { test, expect } = require("@playwright/test");
test("UI Handling", async ({ browser }) => {

    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Selecting Radio button
    await page.locator("span.radiotextsty").last().click();
    
    //Verification of radio button
    console.log(await page.locator("span.radiotextsty").last().isChecked());

    //Validation using expect
    await expect(page.locator("span.radiotextsty").last()).toBeChecked();
    await page.locator("#okayBtn").click();


    //checkbox - check it
    await page.locator("#terms").check();
    await expect(page.locator("#terms")).toBeChecked();

    // uncheck
    await page.locator("#terms").uncheck();
    console.log(page.locator("#terms").isChecked()); //false
    // Check in boolean character


    //Dropdown  
    const Drp = page.locator("select.form-control");
    await Drp.selectOption("teach");

    //await page.pause();


})