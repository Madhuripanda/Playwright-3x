import{test,expect} from '@playwright/test';

test('Automate Katalon Cura Website', async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.getByRole('link', {name: 'Make Appointment'}).click();
    await expect(page.locator('.lead')).toHaveText('Please login to make appointment.');

    //Login
    await page.locator('#txt-username').fill("John Doe");
    await page.locator('#txt-password').fill("ThisIsNotAPassword");
    await page.getByRole('button', {name:'Login'}).click();

    //assert heading
    const heading = page.getByRole('heading',{name:'Make Appointment'} );
    await expect(heading).toBeVisible();




})