const getColor = (amount) => {
  if (amount >= 10 ** 6) return 40;
  if (amount < 10 ** 6 && amount >= 10 ** 5) return 50;
  if (amount < 10 ** 5 && amount >= 10 ** 4) return 60;
  if (amount < 10 ** 4 && amount >= 10 ** 3) return 70;
  if (amount < 10 ** 3 && amount >= 10 ** 2) return 80;
  if (amount < 10 ** 2 && amount >= 10 ** 1) return 90;
  else return 95;
};

export default getColor;
