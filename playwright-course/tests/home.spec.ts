import { test, expect } from '@playwright/test';

test.describe('AboutPage', () => {
    test('Go to the AboutPage and check the Title', async ({ page }) => {
        //check the url 
        await page.goto('https://practice.automationbro.com/about/')

        //check the title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
        
        test('Click Get Started button using CSS Selector', async ({ page }) => {
            //check the url 
            await page.goto('https://practice.automationbro.com')

            //click the buton
            page.locator('#get-started').click();
    
            //check the url has #get-started
            await expect(page).toHaveURL('https://practice.automationbro.com/#get-started')
        })

        test('Verify heading text is visible using text selector', async ({ page }) => {
            //check the url 
            await page.goto('https://practice.automationbro.com')

            //find the text locator
            const headingText = page.locator('text=Think different. Make different.')
    
            //verify heading text is visible
            await expect(headingText).toBeVisible();
        })

        test('Verify home link is enabled using text and css selector', async ({ page }) => {
            //check the url 
            await page.goto('https://practice.automationbro.com')

            //find the home text
            //const homeText = await page.locator('#primary-menu >> text=Home')
            const homeText = page.locator('#primary-menu:has-text("Home")')
    
            //verify heading text is visible
            await expect(homeText).toBeEnabled();
        })

        test('Verify search icon is visible using xpath selector', async ({ page }) => {
            //check the url 
            await page.goto('https://practice.automationbro.com')

            //find the search icon
            const searchIcon = page.locator('//*[@id="primary-menu"]//*[@class="tg-icon tg-icon-search"]')
    
            //verify searchIcon is visible
            await expect(searchIcon).toBeVisible();
        }) 

        test('Verify text of all nav links', async ({ page }) => {

            const expectedLinks = [
                "Home",
                "About",
                "Shop",
                "Blog",
                "Contact",
                "My account"
            ];

            //check the url 
            await page.goto('https://practice.automationbro.com')

            //find the nav links
            const navLinks = page.locator('#primary-menu li[id*=menu]')

            //print out all the links
            for (const el of await navLinks.elementHandles()) {
                console.log(await el.textContent()) 
            }
    
            //verify nav links text
            expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        })

})


