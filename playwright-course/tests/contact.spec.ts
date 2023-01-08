import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
    test('Verify success message', async ({ page }) => {

        await page.goto('https://practice.automationbro.com/contact')

        //fill out the input fields
        await page.locator('.contact-name input').fill('Name')
        await page.locator('.contact-email input').fill('Name@gmail.com')
        await page.locator('.contact-phone input').fill('380971234567')
        await page.locator('.contact-message textarea').fill('hope it will work')
        
        //click on submit 
        await page.locator('button[type=submit]').click()

        //verify success message 
        const successMessage = page.locator('.everest-forms:has-text("Thanks for contacting us! We will be in touch with you shortly")')
    })

    test('Blog exercise', async ({ page }) => {

        await page.goto('https://practice.automationbro.com/blog/')

        //get the recent post list element 
        const recentPostsLists = page.locator('#recent-posts-3 ul li')
        
        //loop through the list and assert the char lenght >10 
        for (const el of await recentPostsLists.elementHandles()) {
            expect((await el.textContent())?.length).toBeGreaterThan(10)       
        }

        //assert the total lenght = 5 
        expect(await recentPostsLists.count()).toEqual(5)
       
    })
    
})
