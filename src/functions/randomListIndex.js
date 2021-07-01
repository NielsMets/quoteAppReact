export const randomListIndex = (list, num, setNum) => {
  //generate number
  let i = Math.floor(Math.random() * list.length);
  //make sure number is different
  if (i == num) {
    return randomListIndex(list);
  } else {
    setNum(i);
  }
  return i;
};
