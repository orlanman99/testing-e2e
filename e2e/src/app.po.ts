import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getPoints(){
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }
  
  getNumero(){
    return element(by.cssContainingText('div', 'Numero')).$('span').getText();
  }

  getButtonP(){
    return element(by.cssContainingText('button', 'Plus 1'));
  }

  getButtonR(){
    return element(by.cssContainingText('button', 'Reset'));
  }

}
