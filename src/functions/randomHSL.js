export const randomHSL = (h, hMin, s, sMin, l, lMin) => {
  let randomNum = (max, min) => {
    let num = Math.floor(Math.random() * max);
    if (num < min) {
      num = min;
    }
    return num;
  };
  return `hsl(${randomNum(h, hMin)},${randomNum(s, sMin)}%,${randomNum(
    l,
    lMin
  )}%)`;
};
