import { myBool } from './index';

describe(`index`, () => {
  it(`passes`, () => {
    expect(myBool).toEqual(true);
  });
});
