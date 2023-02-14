// FIX: return min of the array elements
const min = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => Math.min(a, b));
};
export default min;
