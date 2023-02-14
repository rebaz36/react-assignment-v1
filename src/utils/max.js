const max = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => Math.max(a, b));
};
export default max;
