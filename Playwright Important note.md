**Playwright Day 6**



\[Style\*='block'] star is used for contains

For getting text we use -**textContent(); and it is coming from locatore interface**



**Expect method**

**expect(page).toHaveTitle("expect title")**



**Playwright Day 9**



await expect(documentlink).toHaveAttribute("class","blinkingText");

.toHaveAttribute will be declare as string and will return void mostly used for link in the webpage.



**Interview question**

**How will you validate particular attribut name**



**\*Handling the child window \& Tabs(VVV imp)**



await expect(documentlink).toHaveAttribute("class", "blinkingText");



  const \[Childpage] = await Promise.all(\[

  Context.waitForEvent("page"),



  await documentlink.click()



  ])

 

 const text = await Childpage.locator("p.red").textContent();



 console.log(text);





})

1. toHaveAttribute-used to check whether the browser contains any link,src in the dom element.

2\. Promise.all-Which is used to run the code simultaneously

3\. waitForEvent-It defines that to wait for another event or page load before the executing the further code.



\#to run the particular file



**npm test laywright tests/day9 test.spec.js**



Q.What is playwright inspector



it is used to debug the command

Playwright inspector with open

press start over

we can step by step execute with output



Also we can validate and get the locator in the inspector





**Day 14 :methods and process**

**Article-** is nothing but  tag name

isVisible- will show you the text/datas



**Waitfor**()--->used to wait the element command that tells your test to pause and wait until a specific item on a webpage is ready



To call the text - **:has-txt('partial text')**

**:text-is('exact text')**





**PressSequentially -** Which will help to test dynamic testing for the locator



**Day16**



need to fetch Rows and table and click view button

**includes()** Method



**Day17-playwirght inbuild locator**

**1.getBylabel**

**2.getByPlaceholder**

**3.getByRole**

**4.getBytext(“text”).is visible**





**Day18-**

