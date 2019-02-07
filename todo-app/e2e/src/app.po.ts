import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLoginMenu() {
    return element(by.xpath('//span')).getText() as Promise<string>;
  }
}
