import { AngularAmazonoPage } from './app.po';

describe('angular-amazono App', function() {
  let page: AngularAmazonoPage;

  beforeEach(() => {
    page = new AngularAmazonoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
