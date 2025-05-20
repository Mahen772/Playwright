import { test, expect } from '@playwright/test';

test('Verify User Sign Up', async ({ page }) => {
    await page.goto('https://apply.mykaleidoscope.com/program/sdet-test-scholarship');
    await page.locator('[href*="applications"]').waitFor();
    await page.locator('[href*="applications"]').click();
    await page.locator('[type="email"]').waitFor();
    await page.locator('[type="email"]').click();
    await page.locator('[type="email"]').fill("test2@abc.in");
    await page.locator('[id="login-page__cta"]').waitFor();
    await page.locator('[id="login-page__cta"]').click();
    await page.getByLabel('First Name').waitFor();
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.locator('[aria-haspopup="listbox"]').click();
    await page.locator('[data-country-code="in"]').waitFor();
    await page.locator('[data-country-code="in"]').click();
    await page.locator('input[type="tel"]').waitFor();
    await page.locator('input[type="tel"]').fill('12345522');
    await page.locator('input[type="password"]').fill('QATest@1234!');
    await page.locator('[type="checkbox"]').first().click();
    await page.getByLabel('Submit').click();
    await page.locator('h1[class*="heading"]').waitFor();
    expect(await page.locator('h1[class*="heading"]').textContent()).toBe('Welcome back, John!');
});