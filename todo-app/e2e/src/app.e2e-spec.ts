import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login message', () => {
    page.navigateTo();
    expect(page.getLoginLabel()).toEqual('Login');
  });

  it('should be able to add a task', async () => {
    page.navigateTo();
    page.login('Bret');
    await page.wait(3000);
    page.getNavLink('/todos').click();
    await page.wait(1000);
    page.addTask('AAAAAA', 10);

    await page.wait(10000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
