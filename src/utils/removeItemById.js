const removeItemById = (array, itemId) => {
  const index = array.findIndex((item) => itemId === item.id);
  array.splice(index, 1);
  return array;
};

export default removeItemById;
