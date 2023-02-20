import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import SearchPage from '../pageobjects/search.page.js';
import storePage from '../pageobjects/store.page.js';

const pages = {
	login: LoginPage,
	search: SearchPage,
	store: storePage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
	switch (page) {
		case 'login':
			await pages[page].open();
			break;
		case 'search':
			await pages[page].search();
			break;
		case 'store':
			await pages[page].open();
			break;
	}
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
	await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
	await expect(SecurePage.flashAlert).toBeExisting();
	await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I search for (.*)$/, async (query) => {
	await SearchPage.searchByQuery(query);
});

Then(/^I should see a results for (.*)$/, async (query) => {
	const output = await $('.//*[@aria-label="Cari"]').getValue();
	expect(output).toBe(query);
	expect(output).toBeDisplayed();
});

When(/^I buy midtrans pillow$/, async () => {
	await storePage.clickBuy();
});

When(/^I input my details$/, async () => {
	await storePage.inputDetails();
});

Then(/^I should see payment page$/, async () => {
	await expect(storePage.paymentPage).toBeDisplayed();
	await browser.pause(1000);
	await browser.switchToFrame(0);
	await (await $('.modal-iframe')).waitForDisplayed({ timeout: 3000 });
	await expect($('.modal-iframe')).toBeDisplayed();
	await expect($('.merchant-name')).toBeDisplayed();
	await (await $('a[href="#/credit-card"]')).click();
	await browser.pause(3000);
});
