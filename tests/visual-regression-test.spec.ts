import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('about page comparison', async ({ page }) => {
    await page.goto('/about-us/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('products page comparison', async ({ page }) => {
    await page.goto('/products/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('news page comparison', async ({ page }) => {
    await page.goto('/news/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('investor relations page comparison', async ({ page }) => {
    await page.goto('/investor-relations/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('recruit page comparison', async ({ page }) => {
    await page.goto('/recruit/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('contact page comparison', async ({ page }) => {
    await page.goto('/contact/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('software engineer job page comparison', async ({ page }) => {
    await page.goto('/recruit/software_engineer/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('scobc a1 product page comparison', async ({ page }) => {
    await page.goto('/products/scobc_a1/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('individual news article comparison (simple)', async ({ page }) => {
    await page.goto('/news/2025-08-08/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('individual news article comparison (complex)', async ({ page }) => {
    await page.goto('/news/2025-09-04/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });
});

test.describe('Mobile Visual Comparison Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('homepage mobile comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('about page mobile comparison', async ({ page }) => {
    await page.goto('/about-us/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });

  test('products page mobile comparison', async ({ page }) => {
    await page.goto('/products/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot();
  });
});

test.describe('Component Visual Tests', () => {
  test('navigation header comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    const header = page.locator('nav, header, .nav, .header').first();
    await expect(header).toHaveScreenshot();
  });

  test('footer comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    const footer = page.locator('footer, .footer').first();
    await expect(footer).toHaveScreenshot();
  });

  test('mobile navigation comparison', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('load');
    const mobileNav = page.locator('nav, header, .nav, .header').first();
    await expect(mobileNav).toHaveScreenshot();
  });

  test('mobile navigation expanded', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('load');
    const menuToggle = page.locator('[aria-label*="menu"], [aria-label*="Menu"], .menu-toggle, .hamburger, button[class*="menu"]').first();

    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      const expandedNav = page.locator('nav, header, .nav, .header').first();
      await expect(expandedNav).toHaveScreenshot();
    }
  });
});
