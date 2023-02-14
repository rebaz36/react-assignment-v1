// FIX: update the function to return an array of amounts for an array of the following shape

/*
INPUT:
[
    {
        id:1,
        amount:10.52,
        description: 'some text',
        currency: '$',
        timestamp: 1676186779956
    },
    {
        id:2,
        amount: 77.77,
        description: 'some text 2',
        currency: '$',
        timestamp: 1676186789953
    },
]

OUTPUT:
[10.52, 77.77]
*/

const mapItemsToAmounts = (itemsArray) => {
  const amounts = itemsArray.map((item) => item.amount);
  return amounts;
};
export default mapItemsToAmounts;
