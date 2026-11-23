const {defineConfig} = require("@playwright/test");

const config = defineConfig({

    testDir: "./tests",
    timeout: 40 * 1000,

    expect: {
        timeout: 10 * 1000
    },

    use: {
        browserName: "chromium",
        headless:false,
        screenshot:"only-on-failure",
        trace:"retain-on-failures"
    },

    reporter: "html"

})

export default config;