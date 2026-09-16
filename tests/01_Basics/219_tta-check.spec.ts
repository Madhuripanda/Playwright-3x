import {test, expect} from '@playwright/test';

test('Test', async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.getByRole('textbox', {name: 'Email Address'}).fill('Madhu@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByTestId('login-button').click();

});