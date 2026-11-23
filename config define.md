// @ts-check

import { defineConfig, devices } from '@playwright/test';



/\*\*

&nbsp;\* Read environment variables from file.

&nbsp;\* https://github.com/motdotla/dotenv

&nbsp;\*/

// import dotenv from 'dotenv';

// import path from 'path';

// dotenv.config({ path: path.resolve(\_\_dirname, '.env') });



/\*\*

&nbsp;\* @see https://playwright.dev/docs/test-configuration

&nbsp;\*/

export default defineConfig({

&nbsp; testDir: './tests',

&nbsp; /\* Run tests in files in parallel \*/

&nbsp; fullyParallel: true,

&nbsp; /\* Fail the build on CI if you accidentally left test.only in the source code. \*/

&nbsp; forbidOnly: !!process.env.CI,

&nbsp; /\* Retry on CI only \*/

&nbsp; retries: process.env.CI ? 2 : 0,

&nbsp; /\* Opt out of parallel tests on CI. \*/

&nbsp; workers: process.env.CI ? 1 : undefined,

&nbsp; /\* Reporter to use. See https://playwright.dev/docs/test-reporters \*/

&nbsp; reporter: 'html',

&nbsp; /\* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. \*/

&nbsp; use: {

&nbsp;   /\* Base URL to use in actions like `await page.goto('')`. \*/

&nbsp;   // baseURL: 'http://localhost:3000',



&nbsp;   /\* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer \*/

&nbsp;   trace: 'on-first-retry',

&nbsp; },



&nbsp; /\* Configure projects for major browsers \*/

&nbsp; projects: \[

&nbsp;   {

&nbsp;     name: 'chromium',

&nbsp;     use: { ...devices\['Desktop Chrome'] },

&nbsp;   },



&nbsp;   {

&nbsp;     name: 'firefox',

&nbsp;     use: { ...devices\['Desktop Firefox'] },

&nbsp;   },



&nbsp;   {

&nbsp;     name: 'webkit',

&nbsp;     use: { ...devices\['Desktop Safari'] },

&nbsp;   },



&nbsp;   /\* Test against mobile viewports. \*/

&nbsp;   // {

&nbsp;   //   name: 'Mobile Chrome',

&nbsp;   //   use: { ...devices\['Pixel 5'] },

&nbsp;   // },

&nbsp;   // {

&nbsp;   //   name: 'Mobile Safari',

&nbsp;   //   use: { ...devices\['iPhone 12'] },

&nbsp;   // },



&nbsp;   /\* Test against branded browsers. \*/

&nbsp;   // {

&nbsp;   //   name: 'Microsoft Edge',

&nbsp;   //   use: { ...devices\['Desktop Edge'], channel: 'msedge' },

&nbsp;   // },

&nbsp;   // {

&nbsp;   //   name: 'Google Chrome',

&nbsp;   //   use: { ...devices\['Desktop Chrome'], channel: 'chrome' },

&nbsp;   // },

&nbsp; ],



&nbsp; /\* Run your local dev server before starting the tests \*/

&nbsp; // webServer: {

&nbsp; //   command: 'npm run start',

&nbsp; //   url: 'http://localhost:3000',

&nbsp; //   reuseExistingServer: !process.env.CI,

&nbsp; // },

});





