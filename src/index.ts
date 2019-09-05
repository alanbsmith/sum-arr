// takes an array of numbers and adds them up
export const sumArr = (arr: number[], sum = 0): number => {
  if (arr.length === 0) {
    return sum;
  }

  const [num, ...rest] = arr;
  const newSum = sum + num;
  return sumArr(rest, newSum);
};
