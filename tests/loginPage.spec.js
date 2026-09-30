import { test, expect } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import testData from '../config/test.json';

const email = testData.email;
const password = testData.password;

test('Verify that login is successful', async ({ page }) => {
  const mainPage = new HomePage(page);
  await mainPage.openHomePage();
  await mainPage.clickLoginButton();

  const loginPage = new LoginPage(page);
  expect(await loginPage.getEmailField()).toBeVisible();

  await loginPage.login(email,password);
  await expect(mainPage.getLogoutText()).toHaveText('Logout');
});
