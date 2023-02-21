// FIX: return the summation of the array elements
const total = (array) => {
  const Total = array.map((item) => Number(item)).reduce((a, b) => a + b, 0);
  const RoundedTotal = Math.round(Total * 100) / 100;
  return RoundedTotal;
};
export default total;
