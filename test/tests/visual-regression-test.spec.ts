import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  await context.addInitScript(() => {
    window.localStorage.setItem('cookieClosed', 'true');
  });
});

async function enableCookieBanner(page) {
  await page.addInitScript(() => {
    localStorage.removeItem('cookieClosed');
  });
}

async function alignHomepageBottom(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  const bottom = page.locator('#main-content > .section').filter({
    has: page.locator('.card-grid'),
  });
  await expect(bottom).toHaveCount(1);
  // Headlines can shift this section by a fractional pixel. Align its origin
  // without changing its size or its spacing relative to the footer, so the
  // screenshots compare rendering rather than document-position rounding.
  await bottom.evaluate((element: HTMLElement) => {
    const top = element.getBoundingClientRect().top;
    const margin = parseFloat(getComputedStyle(element).marginTop);
    element.style.marginTop = `${margin + Math.ceil(top) - top}px`;
  });
  return bottom;
}

test.describe('Visual Regression Tests', () => {
  test('homepage comparison (banner visible)', async ({ page }) => {
    await enableCookieBanner(page);
    await page.goto('/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: false });
  });

  test('homepage comparison (privacy modal)', async ({ page }) => {
    await enableCookieBanner(page);
    await page.goto('/en');
    await page.waitForLoadState('load');
    await expect(page.locator('#cookie-banner')).toBeVisible();
    await page.locator('#open-privacy-modal').click();
    await expect(page.locator('#privacy-modal')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About Cookies' })).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: false });
  });

  test('homepage comparison (above news)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.evaluate(() => document.fonts.ready);
    const news = await page.locator('.news-list-parent').boundingBox();
    expect(news).not.toBeNull();
    await expect(page).toHaveScreenshot({
      fullPage: true,
      clip: {
        x: 0,
        y: 0,
        width: page.viewportSize()!.width,
        height: Math.floor(news!.y),
      },
    });
  });

  test('homepage comparison (below news)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    const bottom = await alignHomepageBottom(page);
    const bounds = await bottom.boundingBox();
    expect(bounds).not.toBeNull();
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    await expect(page).toHaveScreenshot({
      fullPage: true,
      clip: {
        x: 0,
        y: Math.floor(bounds!.y),
        width: page.viewportSize()!.width,
        height: height - Math.floor(bounds!.y),
      },
    });
  });

  test('about page comparison', async ({ page }) => {
    await page.goto('/about-us/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({
      fullPage: true,
      mask: [
        page.locator('p').filter({
          has: page.locator('.about-company-gap'),
        }),
      ],
    });
  });

  test('products page comparison', async ({ page }) => {
    await page.goto('/products/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('news page comparison', async ({ page }) => {
    await page.goto('/news/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({
      fullPage: true,
      mask: [page.locator('.news-list-parent')],
    });
  });

  test('investor relations page comparison', async ({ page }) => {
    await page.goto('/investor-relations/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('recruit page comparison', async ({ page }) => {
    await page.goto('/recruit/');
    await page.waitForLoadState('load');
    const wanted = page.locator('.twocols.segment').filter({
      has: page.getByRole('heading', { name: 'WANTED', exact: true }),
    });
    await expect(wanted).toHaveCount(1);
    // Job updates change this section's height as well as its contents.
    // Remove it so they do not shift the application form and footer.
    await wanted.evaluate(element => element.remove());
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('contact page comparison', async ({ page }) => {
    await page.goto('/contact/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('software engineer job page comparison', async ({ page }) => {
    await page.goto('/recruit/software_engineer/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('scobc a1 product page comparison', async ({ page }) => {
    await page.goto('/products/scobc_a1/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('individual news article comparison', async ({ page }) => {
    await page.goto('/news/2025-09-04/');
    await page.waitForLoadState('load');
    await expect(page).toHaveScreenshot({
      fullPage: true,
      mask: [page.locator('.news-article-content')],
    });
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
    await alignHomepageBottom(page);
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
