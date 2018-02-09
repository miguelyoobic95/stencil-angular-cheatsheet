import { StencilAngularCheatsheetPage } from './app.po';

describe('stencil-angular-cheatsheet App', () => {
  let page: StencilAngularCheatsheetPage;

  beforeEach(() => {
    page = new StencilAngularCheatsheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
