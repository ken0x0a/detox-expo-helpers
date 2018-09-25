const { reloadApp } = require('detox-expo-helpers')

describe('Example', () => {
  beforeEach(async () => {
    console.log('before reloadApp')
    await reloadApp()
    console.log('after reloadApp')
    // await device.reloadReactNative();
  });

  it('should have App_containerView', async () => {
    console.log('before reloadApp')
    await expect(element(by.id('App_containerView'))).toBeVisible();
    console.log('after reloadApp')
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
})