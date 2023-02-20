import { faker } from '@faker-js/faker';
class StorePage {
	get btnBuy() {
		return $('//*[@data-reactid=".0.0.0.2.0.0.5"]');
	}

	get inputName() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.0.1.0"]');
	}

	get inputEmail() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.1.1.0"]');
	}

	get inputPhone() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.2.1.0"]');
	}

	get btnCheckout() {
		return $('//*[@data-reactid=".0.0.1.1.0"]');
	}

	get inputCity() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.3.1.0"]');
	}

	get inputAddress() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.4.1.0"]');
	}

	get inputPostalCode() {
		return $('//*[@data-reactid=".0.0.1.0.3.0.0.5.1.0"]');
	}

	get paymentPage() {
		return $('#snap-midtrans');
	}

	async open() {
		await browser.url('https://demo.midtrans.com/');
	}

	async clickBuy() {
		await this.btnBuy.waitForDisplayed();
		await (await this.btnBuy).click();
	}

	async inputDetails() {
		await this.inputName.waitForDisplayed();
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		await this.inputName.setValue(`${firstName} ${lastName}`);
		await this.inputEmail.setValue(faker.internet.email(firstName, lastName));
		await this.inputPhone.setValue(faker.phone.number('08###########'));
		await this.inputCity.setValue(faker.address.cityName());
		await (await this.inputAddress).setValue(faker.address.streetAddress());
		await (await this.inputPostalCode).setValue(faker.address.zipCode('######'));
		// await browser.pause(5000);
		await (await this.btnCheckout).click();
		// await browser.pause(3000);
	}
}

export default new StorePage();
