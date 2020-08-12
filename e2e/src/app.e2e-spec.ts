import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('testing-e2e');
  });

  it('points', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
  });

  it('numero', () => {
    page.navigateTo();
    expect(page.getNumero()).toEqual('10');
  });

  it('aumentar points', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');

    page.getButtonP().click();
    page.getButtonP().click();
    page.getButtonP().click();
    page.getButtonP().click();

    expect(page.getPoints()).toEqual('5');
  });

  it ('Reset Points', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');

    page.getButtonR().click();

    expect(page.getPoints()).toEqual('0');
  });

  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
