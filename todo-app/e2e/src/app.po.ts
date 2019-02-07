import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavLink(path: string) {
    return element(by.css(`a[href="#${path}"]`));
  }

  getLoginLabel() {
    return element(by.xpath('//span')).getText() as Promise<string>;
  }

  login(login: string) {
    element(by.css('form input')).sendKeys(login);
    element(by.css('form button')).click();
  }

  async addTask(title: string, userId: number) {
    element(by.css('app-todo-list button')).click();
    element(by.css('app-todo-creator input:first-child')).sendKeys(title);
    // Fixme if required
    element(by.css('app-todo-creator input:nth-child(1)')).sendKeys(userId);
    element(by.css('app-todo-creator button:nth-child(1)')).click();
  }

  async wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
}
