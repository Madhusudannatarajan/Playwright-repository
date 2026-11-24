const { test, expect } = require("@playwright/test");

test("Revision", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    const email = "Maddy@example.com";

    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Maddy@123");
    await page.locator("[type='submit']").click();

    const product = await page.locator("div.card-body");
    const productname = "ZARA COAT 3";

    await page.locator("div.card-body b").first().waitFor();

    const title = await product.allTextContents();
    console.log(title);

    const prodcount = await page.locator("div.card-body b").count();
    console.log(prodcount);

    for (let i = 0; i < prodcount; i++) {

        const txtprod = await product.nth(i).locator("b").textContent();
        console.log(txtprod);

        if (txtprod == productname) {

            await product.nth(i).locator("text= Add to Cart").click();

            break;
        }
    }

    await page.locator("button[routerlink*='cart']").click();

    await page.locator("div.cart li").first().waitFor();

    const ProductIsVisible = await page.locator("h3:text-is('ZARA COAT 3')").isVisible();
    console.log(ProductIsVisible);

    await page.locator("button:text-is('Checkout')").click();
    await page.locator("[value='4542 9931 9292 2293']").fill("4545466634355");
    await page.locator(".input.txt").nth(1).fill("664");
    await page.locator("input[Type='text']").nth(2).fill("Madhusudan");

    await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");

    const countrydrp = await page.locator("section.ta-results");

    await countrydrp.waitFor();

    const option = await countrydrp.locator("button").count();

    console.log(option);

    for (let i = 0; i < option; i++) {
        const text = await countrydrp.locator("button").nth(i).textContent();

        if (text == " India") {
            await countrydrp.locator("button").nth(i).click();

            break;
        }

    }

    //verify the non editable email Id
    await expect(page.locator("label[type='text']")).toHaveText(email);

    //click placeorder button
    await page.locator("a.btnn").click();

    //to print thank you
    await expect(page.locator("h1.hero-primary")).toHaveText(" Thankyou for the order. ");

    //to get the text of order id
    const oderid = await page.locator("label.ng-star-inserted").textContent();
    console.log(oderid);
    //await page.pause();

    //click order history
    await page.locator("label[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();

    const rows = page.locator("tbody tr");

    //get the count of row

    const rowcount = page.rows.count();

    //iteration
    for (let i = 0; i < rowcount; i++) {
        const roworder = await rowcount.nth(i).textContent();//6b0466a5f1e24e33a3c486f7

        if (oderid.includes(roworder)) {
            //this is to click the view button
            await rows().locator("button").first.click();

            break;

        }
    }

    //to validate the order summary
    const ordersummary = page.locator("div.col-text").textContent();
    console.log(ordersummary);
    expect(oderid.includes(roworder)).toBeTruthy();

})

