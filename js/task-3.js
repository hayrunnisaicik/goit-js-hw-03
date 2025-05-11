function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    value < number ? newArray.push(number) : null;
  }

  return newArray;
}
