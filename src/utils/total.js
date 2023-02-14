// FIX: return the summation of the array elements
const total = (array) => {
  const numbers = array.map((item) => Number(item));
  const sum = numbers.reduce((a, b) => a + b, 0);
  const result = Math.round(sum * 100) / 100;
  return result;
};
export default total;
