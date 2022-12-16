const { join } = require('path')
exports.config = {
    capabilities: [
        {
            platformName: "Android",
            platformVersion: "11.0",
            deviceName: "ebac-mobile",
            automationName: "UiAutomator2",
            app: join(process.cwd(), "./cypress/app/loja-ebac.apk"),
            appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
            newCommandTimeout: 240
        }],
    path: "/wd/hub",
    framework: "mocha",
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000,
    },
    hostname: "localhost",
    port: 4723,
    services: ['appium'],
    specs: [
        './cypress/integration/mobile/catalog-products.spec.js'
    ]
}