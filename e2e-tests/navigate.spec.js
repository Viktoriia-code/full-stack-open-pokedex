const { test, expect, describe } = require('@playwright/test')

describe('Pokedex', () => {
  test('navigate from main page to Ivysaur page and check for chlorophyll', async ({ page }) => {
    await page.goto('')
    await page.click('a[href="/pokemon/ivysaur"]')
    await page.waitForSelector('.pokemon-info')
    const abilitiesSection = await page.textContent('.pokemon-abilities')
    expect(abilitiesSection).toContain('chlorophyll')
  })
})