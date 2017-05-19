import { BookmatesPage } from './app.po';

describe('bookmates App', () => {
  let page: BookmatesPage;

  beforeEach(() => {
    page = new BookmatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
