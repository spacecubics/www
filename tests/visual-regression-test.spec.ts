import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('homepage.png');
  });

  test('about page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/about-us/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('about-page.png');
  });

  test('products page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/products/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('products-page.png');
  });

  test('news page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/news/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('news-page.png');
  });

  test('investor relations page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/investor-relations/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('investor-relations-page.png');
  });

  test('recruit page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/recruit/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('recruit-page.png');
  });

  test('contact page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/contact/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('contact-page.png');
  });

  test('software engineer job page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/recruit/software_engineer/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('software-engineer-job-page.png');
  });

  test('scobc a1 product page comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/products/scobc_a1/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('scobc-a1-product-page.png');
  });

  test('individual news article comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/news/2025-08-08/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('news-article-page.png');
  });
});

test.describe('Mobile Visual Comparison Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('homepage mobile comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });

  test('about page mobile comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/about-us/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('about-page-mobile.png');
  });

  test('products page mobile comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/products/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot('products-page-mobile.png');
  });
});

test.describe('Component Visual Tests', () => {
  test('navigation header comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    const header = page.locator('nav, header, .nav, .header').first();
    await expect(header).toHaveScreenshot('navigation-header.png');
  });

  test('footer comparison', async ({ page }) => {
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    const footer = page.locator('footer, .footer').first();
    await expect(footer).toHaveScreenshot('footer.png');
  });

  test('mobile navigation comparison', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    const mobileNav = page.locator('nav, header, .nav, .header').first();
    await expect(mobileNav).toHaveScreenshot('mobile-navigation.png');
  });

  test('mobile navigation expanded', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://127.0.0.1:1111/');
    await page.waitForLoadState('load');
    const menuToggle = page.locator('[aria-label*="menu"], [aria-label*="Menu"], .menu-toggle, .hamburger, button[class*="menu"]').first();

    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      const expandedNav = page.locator('nav, header, .nav, .header').first();
      await expect(expandedNav).toHaveScreenshot('mobile-navigation-expanded.png');
    }
  });
});
