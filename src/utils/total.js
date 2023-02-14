// FIX: return the summation of the array elements
const total = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0);
};
export default total;
