const { test, describe, expect } = require('@playwright/test')

describe('Navigate to Pokemon', () => {
  test('can navigate to ivysaur page and see correct content', async ({ page }) => {
    await page.goto('')
    await page.click('text=ivysaur')
    expect(page.url()).toContain('/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})