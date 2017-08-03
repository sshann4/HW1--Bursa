import { VardasKitchenPage } from './app.po';

describe('vardas-kitchen App', () => {
  let page: VardasKitchenPage;

  beforeEach(() => {
    page = new VardasKitchenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
