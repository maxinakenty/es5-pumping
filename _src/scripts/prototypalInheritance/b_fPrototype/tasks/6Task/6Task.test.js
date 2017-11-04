import menu, { menuOptions } from './';

describe('sixth task', function() {
  it('should get widh from prototype', function() {
    expect(menu.options.width).toBe(300);
  });

  it('should get height from prototype', function() {
    expect(menu.options.height).toBe(850);
  });

  it('should change menu options', function() {
    expect(menuOptions.width).toBe(undefined);
  });
});