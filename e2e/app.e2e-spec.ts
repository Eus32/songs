import { SongsPage } from './app.po';

describe('songs App', () => {
  let page: SongsPage;

  beforeEach(() => {
    page = new SongsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
