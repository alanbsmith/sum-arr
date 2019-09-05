import { sumArr } from './index';

describe('sumArr', () => {
  it('should add the items in the array', () => {
    const sum = sumArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(sum).toBe(55);
  });

  it('should return 0 for an empty array', () => {
    const sum = sumArr([]);
    expect(sum).toBe(0);
  });
});
