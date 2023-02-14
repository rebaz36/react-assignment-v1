// FIX: return min of the array elements
const min = (array) => {
  return array.reduce((a, b) => Math.min(a, b));
};
export default min;
