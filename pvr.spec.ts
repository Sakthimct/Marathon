import test, { expect } from "@playwright/test"

test("Ticket boooking PVR cienemas",async({page})=>{
    await page.goto('https://www.pvrcinemas.com/')
    await page.getByText('Chennai').first().click()
    await page.locator(`//span[text()='BLAST']`).click()
    await page.locator(`//span[text()='Tomorrow']`).click()
    await page.locator(`//h5[text()='07:10 PM']`).first().click()
    await page.getByRole("button",{name:'Accept'}).click()
    await page.locator(`//span[@id='PE.PRIME|G:2']`).click()
    await page.locator(`//span[@id='PE.PRIME|G:1']`).click()
    await page.getByRole("button",{name:'Proceed'}).click()
    expect(page.getByRole("button",{name:'Continue'})).toBeVisible()
    const total = await page.locator('//*[@id="root"]/div[3]/div[2]/div/div[7]/div/div/div/h6[2]/span').innerText()
    console.log(total)
})