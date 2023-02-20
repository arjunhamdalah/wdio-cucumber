import { Key } from 'webdriverio';
import Page from './page.js';

class SearchPage extends Page {
    get inputQuery() {
        return $('.gLFyf');
    }

    open() {
        return super.search();
    }

    async searchByQuery(query) {
        await this.inputQuery.setValue(query);
        await browser.keys([Key.Return]);
    }
}

export default new SearchPage();
