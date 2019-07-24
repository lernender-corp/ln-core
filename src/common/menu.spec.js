import * as Library from "../library/index";
import {Menu} from './menu';

describe('Menu()', () => {
  const obj = new Menu({
		routerLink: ['/']
  });

  it(`hasRouterLinkhasRouterLink`, () => {
    expect(obj.hasRouterLink()).toBe(true);
  });

});
